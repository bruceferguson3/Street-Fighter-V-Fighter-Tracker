import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions
} from 'react-native';

import { MonoText } from '../components/StyledText.js';
import {  } from "react-native";
import { SplashScreen } from 'expo';
import { Asset } from "expo-asset";
import AppLoading from "expo/build/launch/AppLoading";
import { Header, ListItem, Card } from "react-native-elements";
import SearchPlayerScreen from "./SearchPlayerScreen";

class HomeScreen extends React.Component {
    constructor(props) {
        super(props);


    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.logoContainer}>
                    <Card containerStyle={{ marginTop: 35 }}>
                        <Text style={styles.welcomeTitle}>Street Fighter V Player Tracker</Text>
                    </Card>
                    <Image style={styles.fireSparks} source={require('../assets/images/source.gif')}/>
                    <Image style={styles.logo} source={require('../assets/images/street_fighter_v_fighting_logo-1001668.png')}/>
                </View>
            </View>
        );
    }


}

HomeScreen.navigationOptions = {
    headerStyle: {
        backgroundColor: 'white',
        height: 10
    },
    headerTintColor: 'black',
    headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 25,
    },
};


const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    color: 'black',
    height: Dimensions.get('window').height
  },
  welcomeTitle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontWeight: 'bold',
      fontSize: 40,
      width: '100%',
      lineHeight: 40,
      backgroundColor: 'black',
      borderStyle: 'solid',
      borderWidth: 5,
      borderColor: 'black',
      padding: 20
  },
  logo: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height/1.8,
      resizeMode: 'cover',
      transform: [
          { translateY: Dimensions.get('window').height/100 },
      ],
      zIndex: 10
  },
  ryu: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height/2,
    resizeMode: 'cover',
    position: 'absolute',
    zIndex: 8,
      transform: [
          { translateX: -Dimensions.get('window').width + 370 },
          { translateY: Dimensions.get('window').height/1.5 },

      ],

  },
  ken: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height/2,
        resizeMode: 'cover',
        position: 'absolute',
        zIndex: 8,
        transform: [
            { translateX: Dimensions.get('window').width - 270 },
            { translateY: Dimensions.get('window').height/1.5 },
        ],

  },
  fireSparks: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height/1.2,
    resizeMode: 'cover',
    position: 'absolute',
    zIndex: 9
  },
  logoContainer: {
      width: '100%',
      height: '100%',
      position: 'relative',
      backgroundColor: 'black'
  },
  getStarted: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 20,
    color: 'white',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'white',
    padding: 10
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});

export default HomeScreen;