import React, { useState } from 'react';
import {
    View, Text, StyleSheet, SafeAreaView
    , TextInput, Button, Image, Pressable
} from 'react-native';
import Metrics from '../Themes/Metrics';
import Icon from 'react-native-vector-icons/Ionicons';
import { Typography } from '@material-ui/core';


export default function LogoIcon() {
    return (
            // <View style={styles.header}>
                <Image
                    style={styles.logo}
                    size="50"
                    source={require('../assets/logo.png')}
                />

            // </View>
    )
}
const styles = StyleSheet.create({
   
  
    logo: {
        flex: 1,
        justifyContent: 'flex-end',
        margin: 10,
        marginRight: 0,
        resizeMode: 'contain',


    },
   
});
