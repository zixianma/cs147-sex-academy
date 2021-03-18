import React, { useState } from 'react';
import {
    View, Text, StyleSheet, SafeAreaView, Pressable
    , TextInput, Image, Button, TouchableOpacity,
} from 'react-native';
import Metrics from '../Themes/Metrics';
import Icon from 'react-native-vector-icons/AntDesign';
import BackButton from './BackButton';
import LogoIcon from './LogoIcon';
import { fonts, Divider } from 'react-native-elements/dist/config';
import BottomButton from './BottomButton';
import { NavigationContainer } from '@react-navigation/native';





export default function InterestedTopics(props) {

    var topics = ['Masturbation', 'Healthy Relationships', 'Emotion', 'Sex and Faith',
        'Relationships and Sex', 'STD', 'Beauty Standards', 'Marriage and Sex',
        'Assault Prevention', 'Masculinity', 'Femininity', 'Dating', 'Sex Before Marriage'];
    const list = () => {
        return topics.map((elem, i) => {


            return (

                <Pressable key={i} children={({ pressed }) => (


                    <View style={pressed ? styles.textViewPressed : styles.textView}>

                        <Text>{elem}</Text>
                    </View>)} >



                </Pressable>);


        });

    }
    return (

        <SafeAreaView>
            <View style={styles.container}>
                {/* <View style={styles.header}>

                    <BackButton
                        callback={() => { console.log("pressed"); }}
                    />
                    <View style={styles.logo}>
                        <LogoIcon />
                    </View>

                </View> */}

                <View style={styles.body}>
                    <View>
                        <Text style={{
                            fontSize: 36, fontWeight: 'bold',

                        }}>Find interested Topics</Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 21, }}>Select topics you want to explore in Sex Academy</Text>
                    </View>
                    <View style={styles.suggestions}>

                        {list()}


                    </View>

                </View>
                <View>
                    <BottomButton title={"Continue"} 
                    callback={()=>{props.navigation.navigate('HomeStatus')}}/>

                </View>



            </View>

        </SafeAreaView>



    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor:'red',
    },


    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: Metrics.screenHeight * 0.08,
        width: Metrics.screenWidth,
        backgroundColor:'blue',

    },
    body: {
        // flex: 9,
        margin: 10,
        paddingVertical: 50,



    },
    suggestions: {
        flexWrap: 'wrap',
        flexDirection: 'row',

    },
    pic: {
        flex: 1,
        justifyContent: 'flex-start',
        margin: 10,
        resizeMode: 'contain',
    },
    logo: {
        justifyContent: 'flex-end',
        marginRight: 0,
    },
    textView: {
        flexDirection: 'row',
        alignSelf: 'center',

        height: 44,
        padding: 10,
        margin: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        justifyContent: 'center',
        borderRadius: Metrics.screenWidth * .6 * 0.2,

        backgroundColor: '#FFF3F8',
    },

    textViewPressed: {
        flexDirection: 'row',
        alignSelf: 'center',

        height: 44,
        padding: 10,
        margin: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        justifyContent: 'center',
        borderRadius: Metrics.screenWidth * .6 * 0.2,

        backgroundColor: '#FF89BB',

    },

})
