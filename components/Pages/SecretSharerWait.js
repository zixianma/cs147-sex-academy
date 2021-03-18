import React, { useState, useEffect } from 'react';
import {
    View, Text, StyleSheet, SafeAreaView, Pressable
    , TextInput, Image, Button, TouchableOpacity,
} from 'react-native';
import BottomButton from '../BottomButton';

import metrics from '../../Themes/Metrics';
import StoryButtons from '../StoryButtons';
import StoryHeader from '../StoryHeader';
import BottomBar from '../BottomBar';
import { ProgressBar, Colors } from 'react-native-paper';


export default function SecretSharerWait() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(oldCount => {
                const newCount = oldCount + 0.2;
                if (newCount === 1) {
                    clearInterval(interval);
                    // setCount(0);
                    
                }
                return newCount;
            })
        }, 2000);
    }, []);









    return (
        <SafeAreaView>
            <StoryHeader />
            <View style={styles.container}>

                <View style={{
                    alignSelf: 'center', justifySelf: 'center',
                    justifyContent: 'center',

                    flex: 1,

                    marginBottom: 100,
                }}>
                    <Image style={{ margin: 10 }}
                        source={require('../../assets/openpeeps/accessories/Sunglasses-1.png')} />
                    <Image
                        style={{ margin: 10 }} source={require('../../assets/openpeeps/accessories/Sunglasses-1.png')} />
                    <Image
                        style={{ margin: 10 }} source={require('../../assets/openpeeps/accessories/Sunglasses-1.png')} />

                    <Image
                        style={{ margin: 10 }} source={require('../../assets/openpeeps/accessories/Sunglasses-1.png')} />
                    <View style={{marginTop: 100}}>
                    <ProgressBar progress={count} color={Colors.red800} />

                    </View>
                   
                </View>
                {/* <View style={{ flex:1,justifyContent: 'center', backgroundColor: 'blue' }}> */}





                {/* </View> */}





            </View>


        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        width: metrics.screenWidth,
        justifyContent: 'space-between',
        alignItems: 'center',
        // backgroundColor: 'red',

    },


})

