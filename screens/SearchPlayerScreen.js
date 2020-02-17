import React from 'react';
let axios = require('axios');
import PlayerLookup from "../components/PlayerLookup.js";
import {
    ScrollView,
    StyleSheet,
    View,
    Keyboard,
    Text,
    Image,
    Button,
    TextInput,
    Dimensions,
    Alert, AsyncStorage
} from 'react-native';
import SearchedPlayerInfo from "../components/SearchedPlayerInfo.js";

class SearchPlayerScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchedPlayerInfo: [],
            gotInfo: false,
            name: '',
        };

        this.recordName = this.recordName.bind(this);
        this.getSearchedPlayer = this.getSearchedPlayer.bind(this);
        this.clearTable = this.clearTable.bind(this);
    }

    getSearchedPlayer() {
        if (this.state.name !== '') {
            let name = this.state.name;
            axios.post('http://sfv-point-tracker.us-east-2.elasticbeanstalk.com/playerStats', {name: name})
                .then((playerData) => {
                    console.log(playerData.data[0]);
                    this.setState({searchedPlayerInfo: playerData.data, gotInfo: true})
                })
                .catch((err) => console.log(err))
        } else {
            Alert.alert(
                'Fill in Player\'s Name',
                `Please Enter a valid player name`,
                [
                    {text: 'OK', onPress: () => console.log('Ok Clicked')},
                ],
                {cancelable: false},
            );
        }

    }

    recordName(event) {
        this.setState({name: event} )
    }

    clearTable() {
        this.setState({searchedPlayerInfo: [], gotInfo: false})
    }

    render() {
        return (
            <View>
                <View>
                    <PlayerLookup clearTable={this.clearTable} recordName={this.recordName} getSearchedPlayer={this.getSearchedPlayer} name={this.state.name} gotInfo={ this.state.gotInfo } />
                </View>
                {this.state.gotInfo ?
                <SearchedPlayerInfo searchedPlayerInfo={this.state.searchedPlayerInfo} />
                :
                null
                }
            </View>
        );
    }


}

SearchPlayerScreen.navigationOptions = {
  title: 'Search for Players',
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});

export default SearchPlayerScreen