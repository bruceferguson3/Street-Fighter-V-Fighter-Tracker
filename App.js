import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Alert, AsyncStorage, Platform, StatusBar, StyleSheet, View, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import AppNavigator from './navigation/AppNavigator.js';
import UserLoginScreen from "./screens/UserLoginScreen.js";

export default function App(props) {

  const [isLoadingComplete, setLoadingComplete] = useState(false);
  const [isSignedIn, setSignedIn] = useState(false);
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [fadeValue, setFadeValue] = useState(new Animated.Value(0));

  function recordUsername(event) {
      setUsername(event.nativeEvent.text)
  }

  function recordPassword(event) {
      setPassword(event.nativeEvent.text)
  }



  function makeNewUser() {
      // AsyncStorage.clear()
      //     .then(() => console.log('CLEARED'));
      Alert.alert(
          'User does not exist.',
          'Would you like to make a new profile?',
          [
              {text: 'OK', onPress: () => {
                      AsyncStorage.setItem(username, JSON.stringify({username: username, password: password}))
                          .then(() => {
                              console.log(`Saved User ${username}`);
                              setSignedIn(true)
                          })
                          .catch((error) => {
                              console.log('FAILED' + error)
                          })
                  }},
          ],
          {cancelable: false},
      );
  }

  function checkIfUserExists() {
      AsyncStorage.getItem(username)
          .then((user) => {
              console.log(user);
              if (user === null) {
                  makeNewUser()
              } else {
                  let userInfo = JSON.parse(user);
                  console.log(`Welcome Back ${userInfo.username}!`);
                  setSignedIn(true)
              }
          })
          .catch((err) => {
              console.log(err)
          })
  }

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          {isSignedIn === true ? (<AppNavigator/>) : (<UserLoginScreen recordPassword={recordPassword} recordUsername={recordUsername} checkIfUserExists={checkIfUserExists}/>)}
      </View>
    );
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require('./assets/images/personal-avatar_icon-icons.com_53926.png'),
      require('./assets/images/CoarseOrneryAntipodesgreenparakeet-size_restricted.gif'),
      require('./assets/images/oie_10183729HqFC29lq.gif'),
      require('./assets/images/sagat-laughing2-8c33dfa0-ddfe-4cbb-b80f-da8f6b8d6515.gif'),
      require('./assets/images/source.gif'),
      require('./assets/images/splashv2.png'),
      require('./assets/images/street_fighter_v_fighting_logo-1001668.png'),
      require('./assets/images/tumblr_msbjcjDABk1scncwdo1_500.gif'),
      require('./assets/images/NewSplash.png'),
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
    }),
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
