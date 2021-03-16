
import React, { useState } from 'react';
import {
    View, Text, StyleSheet, SafeAreaView
    , TextInput, Button, Image, Pressable
} from 'react-native';
import Metrics from '../Themes/Metrics';
import Icon from 'react-native-vector-icons/Ionicons';
import { Typography } from '@material-ui/core';
import BackButton from './BackButton';


export default function StoryHeader() {
    return (
        <View style={styles.container}>
            <View>
                <BackButton callback={() => {console.log("p story")}} />
            </View>
            <View>
                <Text style={styles.title}>Story</Text>


            </View>
            <View>
                <Image style={styles.tinyLogo} source={require('../assets/avatar.png')} />
            </View>




        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        // width: Metrics.screenWidth,
        height: 60,
        flexDirection: 'row', // row
        backgroundColor: Metrics.lightPink,
        alignItems: 'center',
        justifyContent: 'space-between', // center, space-around
        paddingLeft: 20,
        paddingRight: 20
    },
    tinyLogo: {
        width: 50,
        height: 50
    },
    title:{
        fontSize: 27,
        fontWeight:'bold',
    }


})