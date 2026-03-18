# FastNotes

This project was developed as part of a coursework assignment.

FastNotes is a simple personal note app made in two different frameworks:

- React Native (Expo)
- Flutter

The purpose of this project is to compare the developer experience and functionality of the two frameworks.

---

## Features in both apps

- View a list of notes on the main screen
- Create a new note
- Save a note and return to the main screen
- Open a note to view its details
- Back navigation to return to the main screen
- No permanent storage (notes are stored temporarily while the app is running)

---

## Project structure

```
FastNotes/
├── react-native/
│   └── HelloReactNative
└── flutter/
    └── fastnotes_flutter
```

---

## How to run

**React Native**
```
cd react-native/HelloReactNative
npm install
npx expo start
```
Press **a** to open in Android emulator

**Flutter**
```
cd flutter/fastnotes_flutter
flutter pub get
flutter run
```

Make sure the Android emulator is running before starting the app.

---

## Frameworks used

- React Native with Expo
- Flutter

---

## Notes

- The apps were tested on an Android emulator
- Both apps implement the same functionality
- This project demonstrates differences in development experience between the frameworks
