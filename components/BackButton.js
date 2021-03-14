
import React, { useState } from 'react';
import {
    View, Text, StyleSheet, SafeAreaView
    , TextInput, Button, Image, Pressable
} from 'react-native';
import Metrics from '../Themes/Metrics';
import Icon from 'react-native-vector-icons/Ionicons';
import { Typography } from '@material-ui/core';



export default function BackButton(props) {
    console.log(props.callback.toString());
    return (
        

            <Pressable onPress={() => { props.callback() }}>
                {/* <View style={styles.header}> */}
                    <Icon name="arrow-back-circle-outline"
                        size="50"
                        style={styles.pic}
                    />
                {/* </View> */}
            </Pressable>




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
        resizeMode: 'contain',
    },
   
});
