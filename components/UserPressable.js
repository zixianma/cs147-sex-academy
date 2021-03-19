
import React, { useState } from 'react';
import {
    View, Text, StyleSheet, SafeAreaView
    , TextInput, Button, Image, Pressable
} from 'react-native';
import Metrics from '../Themes/Metrics';
import Icon from 'react-native-vector-icons/Ionicons';
import { Typography } from '@material-ui/core';
import BackButton from './BackButton';
import User from '../components/User';


export default function UserPressable() {
    return (
        <Pressable
        onPress={()=>{
        
        console.log(' p user pressable');
        
         return <User/>}}
        >
            <Image
                size='20'
                source={require('../assets/avatar.png')} />



        </Pressable>



    )
}

const styles = StyleSheet.create({

})
