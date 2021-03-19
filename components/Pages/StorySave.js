import React, { useState } from 'react';
import {
    View, Text, StyleSheet, SafeAreaView, Pressable
    , TextInput, Image, Button, TouchableOpacity,
} from 'react-native';
import BottomButton from '../../components/BottomButton';

import metrics from '../../Themes/Metrics';

export default function StorySave(props) {

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={{justifyContent:'center', alignItems:'center',}}>
                    <Text style={{ fontSize: 27, fontWeight: '400' }}> 
                    {props.text}
                    </Text>


                </View>
                <View style={{alignSelf:'center', margin:10}}>
                <Text style={{fontSize: 30}}> :) </Text>


                </View>
                <View style={{margin:10}}>

                <BottomButton title='Ok!' 
                callback={props.callback}/>
                

                </View>


            </View>




        </View>
    )
}
const styles = StyleSheet.create({
    container: {


        alignSelf: 'center',
        borderRadius: 20,
        borderWidth: 2,
        borderColor: 'black',
        backgroundColor: 'white',
        marginBottom:300,
        flexWrap: 'wrap',

    },
    card: {

        padding: 20,
        width: metrics.screenWidth * 0.8,
        // height: metrics.screenHeight * 0.25,
        flexWrap: 'wrap',
        justifyContent:'center',

    }


})
