
import React, { useState } from 'react';
import {
    View, Text, StyleSheet, SafeAreaView
    , TextInput, Button, Image, Pressable,TouchableOpacity,
} from 'react-native';
import Metrics from '../Themes/Metrics';
import { Typography } from '@material-ui/core';



export default function BackButton(props) {
    
    return (
        

            // <Pressable onPress={() => { props.callback()}}>
            //         <Image source ={require('../assets/back-btn.png')}/>
            // </Pressable>

            
            <TouchableOpacity>
            <Image source ={require('../assets/back-btn.png')}/>
            </TouchableOpacity>




    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    pic: {
        flex: 1,
        justifyContent: 'flex-start',
        margin: 10,
        
    },
   
});
