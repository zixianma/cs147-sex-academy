import { withTheme } from '@material-ui/core';
import React from 'react';
import {
    View, Text, StyleSheet, SafeAreaView
    , TextInput, Button, Image,
} from 'react-native';
import metrics from '../Themes/Metrics';


export default function Home() {
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.backGround}>
                <View style={styles.pic}>
                    <Image
                        source={require('../assets/home.png')}
                    />
                </View>
                <View style={styles.card}>
                    <Text style={styles.title}>
                        Sex Academy
                </Text>
                    <View>
                        <Text style={styles.sub}>Personalized Sex Ed with Stories</Text>
                    </View>
                </View>
            </View>
            






        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    pic: {
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    backGround: {
        flex: 1,
        width: metrics.screenWidth,
        backgroundColor: '#F65F94',
    },
    card: {
        flex:1,
        height: metrics.screenHeight / 7,
        width: metrics.screenWidth * 0.8,
        backgroundColor: '#F65F94',
        // justifyContent: 'center',
        alignSelf: 'center',
        

    },
    title: {
        fontSize: 36,
        fontWeight: '800',
        alignSelf: 'center',
        color: '#fff',
    },
    sub: {
        fontWeight: '400',
        fontSize: 24,
        color: '#fff',
        textAlign: 'center'
    }
});
