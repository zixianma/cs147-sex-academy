import { StylesProvider } from '@material-ui/styles';
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, SafeAreaView, Image } from 'react-native';
import metrics from '../../Themes/Metrics';
import BackButton from '../BackButton';
import BottomBar from '../BottomBar';
import StoryHeader from '../StoryHeader';
import BottomButton from '../BottomButton';

export default function StoryLanding(props) {
    const [transition, setTransition ] = useState(false);

    useEffect(()=>{
        if(transition ===true){
            props.navigation.navigate('JournalEntry');
        }
    })
    return (
        <SafeAreaView style={styles.container}>
            {/* <View style={styles.container}> */}

                {/* <StoryHeader /> */}
                <View style={styles.body}>

                    <View style={styles.card}>
                        <View style={styles.cardHeader}>
                            <Image
                                style={{ resizeMode: 'contain' }}
                                source={require('../../assets/alisa.png')}></Image>
                        </View>
                        <View style={styles.cardTitle}>
                            <Text style={{ fontSize: 36, fontWeight: '800' }}>What would you like to get off your chest?</Text>
                        </View>
                        <View style={styles.cardText}>
                            <Text style={{ fontSize: 18 }}>
                                Share your stories and cofusions about sex. If you want, we will
                                connect you with someone, a "secret sharer", who has been through
                                what you have been through.
                            </Text>
                        </View>
                    </View>

                </View>

                <BottomButton title={<Text>Tell a story </Text>}
                // callback={()=>{ setTransition(true)}}
                callback={()=>{props.navigation.navigate('JournalEntry'); }}
                />

                {/* <View style={styles.footText}>
                    <Text style={{ fontSize: 15, fontWeight:'600',color:'#FF89BB' }}>Don't know what to write about?</Text>

                </View> */}
                <BottomBar props={props}/>




            {/* </View> */}
        </SafeAreaView>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,

        // width: metrics.screenWidth,
        justifyContent: 'space-between',


    },
    body: {
        marginTop:50,
        justifyContent: 'center',
        alignItems: 'center',
        width: metrics.screenWidth,



    },
    card: {
        width: metrics.screenWidth * 0.8,
        height: 430,
        backgroundColor: '#FFF3F8',
        borderRadius: 430 * 0.1,
        padding: 20,
        borderColor:'black',
        borderWidth:2,


    },
    footText:{
        alignSelf:'center',
        
    },
    cardHeader: {
        flex: 2,
        padding: 10,

    },
    cardText: {
        flex: 4,

    },
    cardTitle: {
        flex: 4,
    },
})
