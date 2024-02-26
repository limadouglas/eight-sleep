
![Eight_Sleep_logo](https://github.com/limadouglas/eight-sleep/assets/21013545/a4e7c61c-ca19-4b8c-8741-e0a52e768aab)

## Demo
## IOS

https://github.com/limadouglas/eight-sleep/assets/21013545/c99cf7c2-1901-484e-83dd-7791a77e0c82

## Android

https://github.com/limadouglas/eight-sleep/assets/21013545/1876ce9c-6314-4528-a9c1-29d39b7501d9

## Tests & Linters

## Pre requisites

- [Node.js > 18](https://nodejs.org) and npm (Recommended: Use [nvm](https://github.com/nvm-sh/nvm))
- [Watchman](https://facebook.github.io/watchman)
- [Xcode 12](https://developer.apple.com/xcode)
- [Cocoapods 1.15](https://cocoapods.org)
- [Ruby > 2.6.10 ](http://rbenv.org/ )
- [JDK > 11](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- [Android Studio and Android SDK](https://developer.android.com/studio)

## Base dependencies

- [axios](https://github.com/axios/axios) for networking.
- [react-query](https://tanstack.com/query/latest) for networking management.
- [react-navigation](https://reactnavigation.org/) navigation library.
- [victory-native](https://commerce.nearform.com/open-source/victory/) for charts.
- [dayjs](https://commerce.nearform.com/open-source/victory/) for date management.
- [flipper](https://fbflipper.com/docs/features/react-native/) for debug.
- [jest](https://facebook.github.io/jest/) and [react-native-testing-library](https://callstack.github.io/react-native-testing-library/) for testing.

## Usage

- You can start by cloning this repository.
- Go to your project's root folder and run `yarn install`.
- If you are using Xcode 12.5 or higher got to /ios and execute `pod install --`repo-update`
- Run `yarn ios` or `yarn android` to start your application!

## Folder structure

This template follows a very simple project structure:

- `src`: This folder is the main container of all the code inside your application.
  - `assets`: Asset folder to store all images, vectors, etc.
  - `components`: Folder to store any common component that you use through your app (such as a generic button)
  - `navigation`: Folder to store the navigators.
  - `screens`: Folder that contains all your application screens/features.
    - `Screen`: Each screen should be stored inside its folder and inside it a file for its code and a separate one for the styles and tests.
      - `Screen.js`
      - `Screen.styles.js`
      - `Screen.test.js`
  - `services`: Folder to store your services(api).
  - `theme`: Folder to store all the styling concerns related to the application theme.
  - `App.js`: Main component that starts your whole app.
  - `index.js`: Entry point of your application as per React-Native standards.
