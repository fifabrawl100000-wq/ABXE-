# ABXE — Build APK from your Android phone

This project already contains a GitHub Actions workflow at:
`.github/workflows/build-apk.yml`

## Phone-only steps

1. Create/sign in to a GitHub account.
2. Create a new repository, for example `ABXE`.
3. Upload the **contents of this folder** to the repository (the folder containing `settings.gradle` and `app/`).
4. Open the repository's **Actions** tab.
5. Choose **Build ABXE APK**.
6. Press **Run workflow**.
7. Wait for the green check to appear.
8. Open the completed workflow run and find **Artifacts**.
9. Download `ABXE-debug-apk`.
10. Extract the downloaded ZIP and install `app-debug.apk` on your Android phone.

The workflow builds a debug APK. It does not sign a Play Store release build.

## Important

Do not put API keys, passwords, or other secrets in the repository or in the APK. If ABXE's server integration needs a secret, keep it on the server and use GitHub Secrets only for build/deployment secrets.
