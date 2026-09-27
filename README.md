# ABXE — MVP

This is a functional offline MVP/prototype of the ABXE puzzle app.

## Run
Open `index.html` in a modern browser. On Android, use the browser's "Add to Home screen" option if supported.

## Included
- ABXE home screen and visual identity
- Start Challenge
- Adaptive-ish puzzle progression based on level
- Answer evaluation
- XP and levels
- Hints
- Error/solved counters
- Daily Challenge
- Arabic/English UI direction toggle
- Local persistence with localStorage
- Responsive mobile-first interface

## Next production step
Connect the chat/evaluation layer to a secure backend that calls an AI model. Keep API keys on the server, not inside the app. The backend should receive the player's level, recent mistakes, puzzle category and conversation state, then return ABXE's response plus a structured evaluation.

The supplied ABXE reference image is stored at `assets/abxe.png` and is used without editing.
