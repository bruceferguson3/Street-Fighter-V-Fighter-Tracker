import React from 'react';
let axios = require('axios');
let SpaceFont = require('../assets/fonts/SpaceMono-Regular.ttf');
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    View,
    Dimensions,
    ActivityIndicator,
    StatusBar,
} from 'react-native';
import { MonoText } from "../components/StyledText";
import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";


class TopPlayerScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            topPlayerListSFV: [],
            isReady: false
        };

        this.topStatsSFV = this.topStatsSFV.bind(this);
    }

    componentDidMount() {
        this.topStatsSFV()
    }

    topStatsSFV() {
        axios.post('http://sfv-point-tracker.us-east-2.elasticbeanstalk.com/topStatsSFV')
            .then((topPlayerData) => {
                this.setState({topPlayerListSFV: topPlayerData.data})
            })
            .catch((err) => console.log(err))

    };




    render() {
        if (!this.state.topPlayerListSFV[0]) {
            return (
                <View style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: Dimensions.get('window').width, height: Dimensions.get('window').height}}>
                    <ActivityIndicator size="large" color="black" style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height/1.5}}/>
                </View>
            );
        } else {
            return (
                <View style={{display: 'flex', flexDirection: 'column', alignItems: 'center', margin:10,
                    width: Dimensions.get('window').width, maxHeight: Dimensions.get('window').height}}>
                    <Text style={topPlayerList.titlesSFV}>These are the current top ranking players for</Text>
                    <Image source={ require('../assets/images/street_fighter_v_fighting_logo-1001668.png')}
                           style={{ width: Dimensions.get("window").width, height: Dimensions.get("window").height/3.2}}/>
                    <View style={{borderStyle: 'solid', borderColor: 'black', borderWidth: 5, alignItems: 'center',
                        width: Dimensions.get("window").width/1.4, padding: 10}}>
                        {this.state.topPlayerListSFV.map((playerInfo,key) => {
                            // console.log(playerInfo.name);
                            return (<Text key={key} style={{fontSize: 20}}>
                                <Text style={{fontWeight: 'bold', color: 'black'}}> Rank: {playerInfo.rank}      </Text>
                                <Text style={topPlayerList.linkedNameSFV}>{playerInfo.name}</Text>
                            </Text>)
                        })}
                    </View>
                </View>
            );
        }


    }


}

TopPlayerScreen.navigationOptions = {
    title: 'Top Ranking Players',
    headerStyle: {
        backgroundColor: 'white',
        height: 100
    },
    headerTintColor: 'black',
    headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 25,
    },
};


const topPlayerList = StyleSheet.create({
    titlesSFV: {
        padding: 5,
        fontSize: 30,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        color: 'black',
    },

    linkedNameSFV: {
        color: 'black',
        fontSize: 20,
    },

});

export default TopPlayerScreen;