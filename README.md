This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

# React Native Navigation and API Calls 

This is a React Native application that includes navigation between two screens (Home and Details) and makes API calls to fetch data.

## Dependencies

- @react-navigation/native
- @react-navigation/stack
- axios
- react-native-gesture-handler
- react-native-screens
- react-native-safe-area-context

## Folder Structure

- **screens/**: Contains the screen components.
  - **HomePage.js**: Displays a list of items fetched from the API.
  - **DetailsPage.js**: Displays details of a selected item.
- **App.js**: Entry point of the application and Contains the navigation setup using React Navigation.

## API Used

[JSONPlaceholder](https://jsonplaceholder.typicode.com/): A fake online REST API for testing and prototyping. We are fetching the list of posts (https://jsonplaceholder.typicode.com/posts) for this application.

