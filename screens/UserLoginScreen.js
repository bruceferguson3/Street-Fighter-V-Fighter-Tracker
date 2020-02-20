import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, View, TextInput, Keyboard, Image, Platform, Animated } from 'react-native';
import { Button, Card, Header, Input, SearchBar, Icon} from "react-native-elements";

const UserLoginScreen = (props) => {

    const [fadeValue, setFadeValue] = useState(new Animated.Value(0));

    function _start() {
        Animated.timing(fadeValue, {
            toValue: 1,
            duration: 1000
        }).start();
    }

    function componentDidMount() {
        _start()
    }

    return (
            <View style={styles.mainContainer}>
                <View style={styles.logoContainer}>
                    <Card containerStyle={{ marginTop: 60 }}>
                        <Text style={styles.welcomeTitle}>Street Fighter V Player Tracker</Text>
                    </Card>
                    <Image style={styles.fireSparks} source={require('../assets/images/source.gif')}/>
                    <Animated.View style={{
                        opacity: fadeValue,
                    }}>
                    <Image style={styles.logo} source={require('../assets/images/street_fighter_v_fighting_logo-1001668.png')}/>
                    </Animated.View>
                    <View style={styles.signInContainer}>
                        <Button type={'solid'} title={'Sign In'} style={styles.signInButton} onPress={props.checkIfUserExists}/>
                        <View>
                            <Input
                                placeholder='Username'
                                placeholderTextColor={'grey'}
                                leftIcon={{ type: 'person', name: 'person', marginRight: 10}}
                                containerStyle={styles.userNameInput}
                                style={styles.userName}
                                onChange={props.recordUsername}
                            />
                            <Input
                                placeholder='Password'
                                placeholderTextColor={'grey'}
                                leftIcon={
                                    <Icon
                                        name='lock'
                                        size={23}
                                        color='black'
                                        containerStyle={{marginRight: 10}}
                                    />
                                }
                                containerStyle={styles.passwordInput}
                                onChange={props.recordPassword}
                            />
                        </View>
                    </View>
                </View>
            </View>
        )

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
    signInContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: 'white',
        color: 'white',
        height: Dimensions.get('window').height/7,
        zIndex: 1000000
    },
    signInButton: {
        width: Dimensions.get('window').width/3.5,
    },
    userNameInput: {
        width: Dimensions.get('window').width/1.8,
    },
    userName: {
        fontSize: 20
    },
    passwordInput: {
        width: Dimensions.get('window').width/1.8,
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
        height: Dimensions.get('window').height,
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
});

export default UserLoginScreen