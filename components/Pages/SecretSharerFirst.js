import React, { useState , useEffect} from 'react';
import {
    View, Text, StyleSheet, SafeAreaView, Pressable
    , TextInput, Image, Button, TouchableOpacity,
} from 'react-native';
import BottomButton from '../BottomButton';

import metrics from '../../Themes/Metrics';
import StoryButtons from '../StoryButtons';
import StoryButtonAlternate from '../StoryButtonAlternate';

export default function SecretSharerFirst(props) {
    // const [transition, isTransition] = useState(false);
 

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={{ margin: 10 }}>
                    <Text style={{ fontSize: 18, fontWeight: '800' }}>
                        Before getting a response from a Secret Sharer...
                    </Text>


                </View>
                <View style={{ alignSelf: 'center', margin: 10 }}>
                    <Text style={{ fontSize: 14 }}> You need to write a response to someone else's story first. </Text>


                </View>
                <View style={{ margin: 10, flexDirection: 'row',justifyContent:'space-around' }}>
                    
                  <StoryButtons title='Cancel'
                  callback={props.callback}/>
                  <StoryButtonAlternate title='Go write'
                
                  callback={props.callback}
                  transition ={props.transition}

                  
                  />


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
        // backgroundColor: 'red',
        flexWrap: 'wrap',
        backgroundColor: '#FFF4CC',
        padding:10,
        marginBottom:300,


    },
    card: {

        padding: 20,
        width: metrics.screenWidth * 0.8,
        // height: metrics.screenHeight * 0.25,
        flexWrap: 'wrap',

    }


})
