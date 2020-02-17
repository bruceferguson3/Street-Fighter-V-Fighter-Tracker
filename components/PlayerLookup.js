import React from 'react';
import { Dimensions, StyleSheet, Text, View, TextInput, Keyboard } from 'react-native';
import { Button, Input, SearchBar } from "react-native-elements";

const PlayerLookup = (props) => {
    return (
        // <View>
        //     <View style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        //         <View style={{borderStyle: 'solid', borderWidth: 3, borderColor: 'black', margin: 20, backgroundColor: 'darkgrey', padding: 1, width: Dimensions.get('window').width/1.5}}>
        //             <Input placeholder='Player name...' onChangeText={props.recordName}/>
        //         </View>
        //         <Button style={{ margin: 5, width: Dimensions.get('window').width/2 }} onPress={props.getSearchedPlayer} title={'Confirm player name'}/>
        //     </View>
        // </View>
        <View style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <SearchBar placeholder='Player name...' onChangeText={props.recordName} platform={"ios"} value={props.name} onClear={props.clearTable} onCancel={props.clearTable}
                       inputContainerStyle={{ padding: 0}} containerStyle={{display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffffff', width: Dimensions.get('window').width/1.2}}/>
            <Button style={{ margin: 10, width: Dimensions.get('window').width/2.2 }} onPress={props.getSearchedPlayer} title={'Confirm player name'}/>
        </View>

    )

};

const playerLookup = StyleSheet.create({
    leftIcon: {

    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

export default PlayerLookup;