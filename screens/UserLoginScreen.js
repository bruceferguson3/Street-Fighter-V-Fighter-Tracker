import React, { Component, useState, useEffect } from 'react';
import { Dimensions, StyleSheet, Text, View, TextInput, Keyboard, Image, Platform, Animated } from 'react-native';
import { Button, Card, Header, Input, SearchBar, Icon} from "react-native-elements";

const UserLoginScreen = (props) => {

    const [slideUpValue] = useState(new Animated.Value(0));
    const [loginFadeInValue] = useState(new Animated.Value(0));
    const [fadeValue] = useState(new Animated.Value(0));
    const [scaleValue] = useState(new Animated.Value(0));

    function _start() {
        return Animated.parallel([
            Animated.timing(fadeValue, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true
            }),
            Animated.timing(slideUpValue, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true
            })
        ]).start();
    }

    function scaleImage() {
        Animated.timing(scaleValue, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true
        })
    }

    function loginFadeIn() {
        Animated.timing(loginFadeInValue, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true
        }).start()
    }

    useEffect(() => {
        _start();
        setTimeout(() => loginFadeIn(), 1300)
    }, []);




    return (
            <View style={styles.mainContainer}>
                <View style={styles.logoContainer}>

                    <Image style={styles.fireSparks} source={require('../assets/images/source.gif')}/>

                    <Animated.View style={{
                        opacity: fadeValue,
                        transform: [
                            {
                                translateY: slideUpValue.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0, -55]
                                })
                            }
                        ],
                    }}>
                    <Card containerStyle={{ marginTop: 120 }}>
                        <Text style={styles.welcomeTitle}>Street Fighter V Player Tracker</Text>
                    </Card>
                    <Image style={styles.logo} source={require('../assets/images/street_fighter_v_fighting_logo-1001668.png')}/>
                    </Animated.View>

                    <Animated.View style={{
                        opacity: loginFadeInValue,
                        transform: [
                            {
                                translateY: slideUpValue.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0, -100]
                                })
                            }
                        ],
                    }}>
                    <View style={styles.signInContainer}>
                        <View>
                            <Input
                                placeholder='Username'
                                placeholderTextColor={'grey'}
                                leftIcon={{ type: 'person', name: 'person', marginRight: 10, color: 'grey'}}
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
                                        color='grey'
                                        containerStyle={{marginRight: 10}}
                                    />
                                }
                                containerStyle={styles.passwordInput}
                                onChange={props.recordPassword}
                            />
                        </View>
                    </View>
                    </Animated.View>
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
        backgroundColor: 'black',
        color: 'white',
        height: Dimensions.get('window').height/6,

    },
    signInButton: {
        width: Dimensions.get('window').width/3.5,
        borderColor: 'white'

    },
    userNameInput: {
        width: Dimensions.get('window').width/1.5,
    },
    userName: {
        fontSize: 20
    },
    passwordInput: {
        width: Dimensions.get('window').width/1.5,
    },
    logo: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height/1.8,
        resizeMode: 'cover',
        transform: [
            { translateY: Dimensions.get('window').height/100 },
        ],

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

    },
    logoContainer: {
        width: '100%',
        height: '100%',
        position: 'relative',
        backgroundColor: 'black'
    },
});

export default UserLoginScreen