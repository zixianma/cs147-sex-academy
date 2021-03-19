import React, { useState } from 'react';
import { View, StyleSheet, Text, SafeAreaView, Image } from 'react-native';
import metrics from '../../Themes/Metrics';
import BackButton from '../BackButton';
import BottomBar from '../BottomBar';
import StoryHeader from '../StoryHeader';
import BottomButton from '../BottomButton';
export default function JournalSuggestions({navigation}) {
    var topics = ['First period', 'Hyper masculinity','break up' ,'Unrequited love',
        'First kiss', 'STD scare', 'Myths about Sex', 'Abortion', 'Masturbation'];

    const list = () => {

        return topics.map((elem, i) => {


            return (

                <View style={styles.textView}>
                    <Text>{elem}</Text>
                </View>
        );

    });
}

return (
    <SafeAreaView>
        <View style={styles.container}>
            <StoryHeader />
            <View style={styles.body}>
                <View style={styles.info}>
                    <View style={{ margin: 10 }}>
                        <Text style={{ fontSize: 21 }}>
                            Story is like your personal journal, except
                            you have the power to control whether to share it with
                            others.

                            </Text>

                    </View>

                    <View style={{ margin: 10 }} >
                        <Text style={{ fontSize: 21 }}>Feel free to use the following for inspiration -- you
                        can write about anything!
                            </Text>
                    </View>


                </View>
                <View style={styles.suggestions}>
                    {list()}

                </View>
            </View>
            <BottomButton title={<Text>Go write one </Text>}/>
            <BottomBar />
        </View>
    </SafeAreaView>
)
}
const styles = StyleSheet.create({
    container: {
        flex: 1,

        // width: metrics.screenWidth,
        justifyContent: 'space-between',
        // backgroundColor: 'red',
        


    },
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: metrics.screenWidth,

    },
    info: {
        flex: 1,
        padding: 20,
        paddingTop:40,
        paddingHorizontal:10,
    },
    suggestions: {
        flex: 2,
        // backgroundColor: 'blue',
        flexWrap: 'wrap',
        flexDirection: 'row',
        padding: 20,
        justifyContent:'flex-start',
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
        borderRadius: metrics.screenWidth * .6 * 0.2,

        backgroundColor: '#FFF3F8',
    },
})
