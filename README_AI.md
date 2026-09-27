# ABXE — real interactive intelligence layer

This package keeps the Android app as the front end and adds a secure server layer so ABXE can actually understand free-form answers and respond as the character.

## Important
The Android app must NEVER contain your secret provider key. The key belongs on the server in `.env`.

## What is already prepared
- ABXE character image kept unchanged.
- No visible "AI" label in the app UI.
- App sends puzzle + player's answer + progress to `/challenge` when `ABXE_SERVER_URL` is set.
- If the server is unavailable, the app automatically falls back to the built-in local puzzle checker.
- Server has ABXE's personality rules and returns structured results.

## To connect the real service
1. On a computer with Node.js installed, open `server`.
2. Run `npm install`.
3. Copy `.env.example` to `.env` and put your secret key in `OPENAI_API_KEY`.
4. Run `npm start`.
5. Deploy the server over HTTPS.
6. Put its HTTPS address in `ABXE_SERVER_URL` in `app/src/main/assets/index.html`.
7. Rebuild the Android app.

The exact model/API configuration can be changed later without changing ABXE's visible personality.
