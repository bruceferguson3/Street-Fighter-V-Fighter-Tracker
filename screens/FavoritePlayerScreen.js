import React from 'react';
import { View, AsyncStorage, Dimensions, ScrollView, Alert, Text } from "react-native";
import { Button, ListItem, Card, PricingCard } from "react-native-elements";


class FavoritePlayerScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            savedPlayerList: [],
            gotPlayers: false,
        };

        this.getSavedPlayers = this.getSavedPlayers.bind(this);
        this.deletePlayer = this.deletePlayer.bind(this);
    }

    componentDidMount() {
        this.getSavedPlayers()
    }

    getSavedPlayers() {
        AsyncStorage.getAllKeys()
            .then(keyArr => {
                AsyncStorage.multiGet(keyArr)
                    .then(results => {
                        let playerStorage = [];
                        results.map((finalResult) => {
                            let result = JSON.parse(finalResult[1]);
                            playerStorage.push(result);
                        });
                        this.setState({savedPlayerList: playerStorage, gotPlayers: true})
                    })
            })
    }

    deletePlayer(playerName) {
        AsyncStorage.removeItem(playerName)
            .then(() => {
                console.log('Player Deleted');
                this.getSavedPlayers()
            })
    }

    deleteOnePlayer(playerName) {
        Alert.alert(
            'Delete Player?',
            `Would you like to delete ${playerName} from your favorite players?`,
            [
                {text: 'Cancel', onPress: () => console.log('Player not Deleted')},
                {text: 'Delete', onPress: () => this.deletePlayer(playerName)},

            ],
            {cancelable: false},
        );
    }





    render() {
        return (
            <View style={{display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', margin: 10}}>
                <ScrollView style={{borderStyle: 'solid', borderWidth: 5, borderColor: 'black', marginBottom: 40, height: '85%', padding: 1.8, width: Dimensions.get('window').width/1.02}}>
                {this.state.savedPlayerList[0]
                    ? (
                        this.state.savedPlayerList.map((player, key) => {
                            return (
                                <View key={key}>
                                    <ListItem
                                        roundAvatar
                                        leftAvatar={{ source: {uri: '/Users/BruceFergusonIII/IdeaProjects/CPT_APP_V2/assets/images/personal-avatar_icon-icons.com_53926.png'}}}
                                        bottomDivider
                                        onPress={() => this.deleteOnePlayer(player.name)}
                                        key={player.name}
                                        title={player.name}
                                        rightTitle={`Rank: ${player.cptRank ? (player.cptRank) : ('N/A')}`}
                                        subtitle={`OnlineID: ${player.onlineId ? (player.onlineId) : ('N/A')}`}
                                        subtitleProps={{style: {marginTop: 10}}}
                                        rightSubtitle={`Points: ${player.cptScore ? (player.cptScore) : ('N/A')}`}
                                        rightSubtitleProps={{style: {marginTop: 10}}}
                                    />
                                </View>
                            )
                        })
                    )
                    : (
                        <View>
                            <Card containerStyle={{display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', height: Dimensions.get('window').height/1.78}}>
                                <Text style={{fontSize: 30, fontWeight: 'bold'}}>NO PLAYERS SAVED</Text>
                            </Card>
                        </View>
                    )
                }
                </ScrollView>
                <Button onPress={() => {
                    Alert.alert(
                        'Are you sure?',
                        `Clicking OK will delete all your saved players.`,
                        [
                            {text: 'OK', onPress: () => {
                                    AsyncStorage.clear()
                                        .then(() => {
                                            this.setState({savedPlayerList: []}, () => console.log('Players Cleared!'))
                                        })
                                }},
                            {text: 'Cancel', onPress: () => console.log('Canceled Delete All Players...')}
                        ],
                        {cancelable: false},
                    );
                }} type={'solid'} title={'Clear All Saved Players'} style={{width: Dimensions.get('window').width/2}}/>

            </View>
        )
    }

}

FavoritePlayerScreen.navigationOptions = {
    title: 'Favorite Players',
    headerStyle: {
        backgroundColor: 'white',
        height: 100,
    },
    headerTintColor: 'black',
    headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 25,
    },
};


export default FavoritePlayerScreen;