# ABXE Android-ready project

This project wraps the ABXE MVP inside a native Android WebView shell.

## Build
Open this folder in Android Studio and let Gradle sync.
Then choose:
Build > Build App Bundle(s) / APK(s) > Build APK(s)

The debug APK will normally be generated under:
app/build/outputs/apk/debug/app-debug.apk

## Requirements
- Android Studio
- JDK compatible with the Android Gradle Plugin
- Android SDK Platform 35

## Notes
- The ABXE image supplied for the MVP is bundled as an offline asset and is not altered.
- The current MVP works offline for its built-in puzzle flow.
- The real AI/chat backend should be added later through a secure server. Do not place an AI API key in the APK.
