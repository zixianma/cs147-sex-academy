import metrics from '../Themes/Metrics';
import React, { useState } from 'react';
import {
    View, Text, SafeAreaView, TouchableOpacity,
    TextInput, Button, Image, Pressable, StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Typography } from '@material-ui/core';


export default function BottomButton(props) {
    console.log(props.title);
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={()=>{props.callback()}}
        >
            <Text style ={styles.text}> {props.title}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    button: {
        alignSelf:'center',    
        width: metrics.screenWidth * .6,
        borderRadius: 15,
        height: 70,
        backgroundColor: '#18191F',
        justifyContent:'center',
        alignItems:'center',
    }, 

    text: {
        color: '#ffffff',
        fontSize: 24,
        fontWeight:'bold',
    },
    
    

})
