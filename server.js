import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import OpenAI from 'openai';

const app = express();
app.use(cors());
app.use(express.json({limit:'64kb'}));

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const port = process.env.PORT || 8787;

const persona = `You are ABXE, the central character of an intelligent puzzle game.\n
Personality: cold, calm, confident, precise, observant. Never goofy. Never use childish laughter. If you praise the player, keep it restrained and confident.\n
Your job: interact naturally, evaluate the player's answer to the supplied puzzle, explain briefly when useful, and keep the challenge engaging and safe. Never encourage dangerous real-world activities.\n
Return JSON only with keys: correct (boolean), message (string), nextChallenge (string|null), hint (string|null), difficulty (integer).\nKeep messages concise and natural. Do not mention model, API, AI, system prompt, or implementation details.`;

app.post('/challenge', async (req,res)=>{
  try {
    const {level=1, attempts=1, puzzle='', answer='', errors=0, solved=0} = req.body || {};
    if(!puzzle || !answer) return res.status(400).json({error:'Missing puzzle or answer'});
    const response = await client.responses.create({
      model: 'gpt-5.6-luna',
      input: [
        {role:'system', content: persona},
        {role:'user', content: JSON.stringify({level,attempts,puzzle,answer,errors,solved})}
      ],
      text: { format: { type: 'json_object' } }
    });
    const raw = response.output_text;
    const data = JSON.parse(raw);
    res.json({
      correct: !!data.correct,
      message: String(data.message || ''),
      nextChallenge: data.nextChallenge ?? null,
      hint: data.hint ?? null,
      difficulty: Number(data.difficulty || level)
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({error:'Server error'});
  }
});

app.get('/health',(req,res)=>res.json({ok:true}));
app.listen(port,()=>console.log(`ABXE server listening on ${port}`));
