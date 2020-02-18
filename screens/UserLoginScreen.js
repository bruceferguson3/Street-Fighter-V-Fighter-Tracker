import React from 'react';
import { Dimensions, StyleSheet, Text, View, TextInput, Keyboard, Image, Platform } from 'react-native';
import { Button, Card, Header, Input, SearchBar, Icon} from "react-native-elements";

const UserLoginScreen = (props) => {

    const usernameInput = React.createRef();
    const passwordInput = React.createRef();

    return (
        <View style={styles.mainContainer}>
            <View style={styles.logoContainer}>
                <Card containerStyle={{ marginTop: 60 }}>
                    <Text style={styles.welcomeTitle}>Street Fighter V Player Tracker</Text>
                </Card>
                <Image style={styles.fireSparks} source={require('../assets/images/source.gif')}/>
                <Image style={styles.logo} source={require('../assets/images/street_fighter_v_fighting_logo-1001668.png')}/>
                <View style={styles.signInContainer}>
                    <Button type={'solid'} title={'Sign In'} style={styles.signInButton}/>
                    <View>
                        <Input
                            placeholder='Username'
                            placeholderTextColor={'black'}
                            leftIcon={{ type: 'person', name: 'person' }}
                            containerStyle={styles.userNameInput}
                            style={styles.userName}
                            ref={usernameInput}
                        />
                        <Input
                            placeholder='Password'
                            placeholderTextColor={'black'}
                            leftIcon={
                                <Icon
                                    name='lock'
                                    size={24}
                                    color='black'
                                />
                            }
                            containerStyle={styles.passwordInput}
                            ref={passwordInput}
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
        height: Dimensions.get('window').height/10,
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




export default UserLoginScreen;