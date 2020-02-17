import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View, AsyncStorage, Alert } from 'react-native';
import { Button } from 'react-native-elements'


const SearchedPlayerInfo = (props) => {
    return (
        <View>
            {props.searchedPlayerInfo[0].name !== undefined
                ?
                ( <View style={{display: 'flex', flexDirection: 'column',
                    alignItems: 'center', justifyContent: 'center', width: Dimensions.get("window").width,
                    height: Dimensions.get("window").height}}>
                    <Text style={{fontSize: 23, fontWeight: 'bold', color: 'black', bottom: 300}}>
                        Displaying {props.searchedPlayerInfo[0].name}'s Information!
                    </Text>
                    <View style={ {
                        borderStyle: 'solid', borderColor: 'black', borderWidth: 5,
                        width: Dimensions.get("window").width / 1.4, padding: 10, alignItems: 'center', bottom: 280}}>

                        {props.searchedPlayerInfo.map((searchedPlayerInfo, key) => {
                            // console.log(searchedPlayerInfo.name);
                            return ( <View key={ key }>
                                <Text style={ { fontSize: 20, fontWeight: 'bold', color: 'black'} }>Name:  { searchedPlayerInfo.name ? (searchedPlayerInfo.name) : ('N/A') }</Text>
                                <Text style={ { fontSize: 20, fontWeight: 'bold', color: 'black' } }>Country:  { searchedPlayerInfo.country ? (searchedPlayerInfo.country) : ('N/A') }</Text>
                                <Text style={ { fontSize: 20, fontWeight: 'bold', color: 'black' } }>OnlineID:  { searchedPlayerInfo.onlineId ? (searchedPlayerInfo.onlineId) : ('N/A') }</Text>
                                <Text style={ { fontSize: 20, fontWeight: 'bold', color: 'black' } }>CPT Ranking:  { searchedPlayerInfo.cptRank ? (searchedPlayerInfo.cptRank) : ('N/A') }</Text>
                                <Text style={ { fontSize: 20, fontWeight: 'bold', color: 'black' } }>CPT Score:  { searchedPlayerInfo.cptScore ? (searchedPlayerInfo.cptScore) : ('N/A') }</Text>
                            </View> )
                        }) }
                    </View>
                    <Button type={'solid'} style={{ margin: 5, width: Dimensions.get('window').width/2, bottom: 250 }} title={'Save Player?'}
                    onPress={ () => {
                        AsyncStorage.setItem(props.searchedPlayerInfo[0].name, JSON.stringify(props.searchedPlayerInfo[0]))
                            .then(() => {
                                Alert.alert(
                                    'Player Saved!',
                                    `${props.searchedPlayerInfo[0].name} was saved to your favorite player list.`,
                                    [
                                        {text: 'OK', onPress: () => console.log('OK Pressed')},
                                    ],
                                    {cancelable: false},
                                );
                            })
                            .catch(error => console.log(error))
                    }}/>

                </View> )
                :
                (
                    <View style={{display: 'flex', flexDirection: 'column', height: '87%',
                        alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{fontSize: 30, fontWeight: 'bold', color: 'black'}}>Player Not Found</Text>
                        <Image style={{display: 'flex', flexDirection: 'column',
                            alignItems: 'center', justifyContent: 'center', width: Dimensions.get("window").width/1.5,
                            height: Dimensions.get("window").height/2, transform: [{scale: .95}]}}
                               source={require('../assets/images/sagat-laughing2-8c33dfa0-ddfe-4cbb-b80f-da8f6b8d6515.gif')}/>
                    </View>
                )
            }
        </View>
    );

};

const searchedplayerInfo = StyleSheet.create({

});

export default SearchedPlayerInfo;