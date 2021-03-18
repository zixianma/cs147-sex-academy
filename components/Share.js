import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TextInput, Pressable } from 'react-native';
import { Icon, BottomSheet, Divider, Button } from 'react-native-elements';
import BackButton from './BackButton';
import BottomButton from './BottomButton';
import Metrics from '../Themes/Metrics';

export default function Share() {
    return (
        <View style={styles.share_view}>

        <Text style={{ fontSize: 20, textAlign: 'center', marginVertical: 20, fontWeight: "bold" }}>Share to</Text>
        <Divider style={{ height: 3, color: 'black' }} />
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Pressable style={styles.social_icon}><Image source={require('../assets/Message.png')}></Image></Pressable>
          <Pressable style={styles.social_icon}><Image source={require('../assets/Mesenger.png')}></Image></Pressable>
          <Pressable style={styles.social_icon}><Image source={require('../assets/Twitter.png')}></Image></Pressable>
          <Pressable style={styles.social_icon}><Image source={require('../assets/Whatsapp.png')}></Image></Pressable>
        </View>
      </View>
    )
}
const styles = StyleSheet.create({
    share_view: {
        backgroundColor: '#EEEFF4',
        height: 0.25 * Metrics.screenHeight,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderWidth: 3,
        borderColor: 'black'
      },
})
