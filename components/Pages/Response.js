import React, { useState, useEffect  } from 'react';
import {
    View, Text, StyleSheet, SafeAreaView, Pressable
    , TextInput, Image, Button, TouchableOpacity,
} from 'react-native';
import BottomButton from '../BottomButton';

import metrics from '../../Themes/Metrics';
import StoryButtons from '../StoryButtons';
//yellow propmpt in Secret sharer page 
import { BottomSheet } from 'react-native-elements';
import StorySave from './StorySave';




export default function Response(props) {
    const [response, setResponse] = useState('Write response here. Be kind and empathetic...');
    const [isVisible, setIsVisible] = useState(false);
    const [move,setMove] = useState(false);

    useEffect(


        ()=>{
            setIsVisible(false);//test
            if(move===true){
                //delay and navigate 
                setTimeout(()=>{props.navigation.navigate('SecretSharerWait')}, 2000);
            }

        }
    );
    return (

        <SafeAreaView style={styles.container}>
            
                
            
            <View style={{flex:1, alignItems:'flex-start', marginBottom:10, marginLeft:15, marginTop:15,}}>
                <View style={styles.story}>
                    <View style={{backgroundColor: metrics.lightPink, borderRadius:5, alignSelf:'center'}}>
                    <Text style={{fontSize:20, lineHeight:30, fontWeight:'600'}}>
                          Story from Anonymous Giraffe
                        
                    </Text>

                    </View>
                   

                    <Text style={{ fontSize: 14, lineHeight: 30 }}>I remember my first period experience. I felt an intense pain
                    in my belly and I had to rush to the bathroom. I was shocked to find red stains on my underwear.
                    I had sex ed classes before but I still felt unprepared. I was in denial of what was happening to me.
                    Because in that moment, I realized I was about to lose my childhood soon. I guess...I was not prepared
                    to accept that reality.
                    </Text>



                </View>

            </View>

            <View style={{ flex: 1, alignItems: 'flex-end',marginBottom:10, marginRight:15, marginTop:15,  }}>
                {/* <View style={styles.response}> */}
                    <TextInput
                        style={styles.response}
                        onChangeText={() => { setResponse({ response }) }}
                        value={response}
                        multiline={true}
                        scrollEnabled={true}
                        blurOnSubmit={true}
                        returnKeyLabel='done'
                    />

                </View>
                <View>
                    <BottomButton 
                    title='Send'
                    callback={()=>{
                        setIsVisible(true);
                        setMove(true);
                        
                    }}
                    />

             <BottomSheet
                isVisible={isVisible}
                containerStyle={{ backgroundColor: 'rgba(0.5, 0.25, 0, 0.2)', borderRadius: 10 }}>
                    <StorySave
                    text='Your response will be sent!!'
                    callback={()=>setIsVisible(false)}
                    />
                    {console.log('isVisible Response',isVisible)}


            </BottomSheet>                    

                </View>

            {/* </View> */}




        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        padding: 15,

    },
    story: {
        backgroundColor:'#FFE8E8',
        marginBottom: 25,
        width: metrics.screenWidth * 0.8,
        flexWrap: 'wrap',
        flexDirection: 'row',
        // backgroundColor: 'red',
        paddingVertical: 30,
        paddingHorizontal: 20,
        borderRadius: 20,
        alignItems:'center',
        
    },
    response: {
        fontSize:14,

        flexDirection: 'row',
        paddingVertical: 30,
        paddingHorizontal: 20,
        borderRadius: 20,
        flexWrap: 'wrap',
        backgroundColor: '#F2F2F2',
        width: metrics.screenWidth * .8,
        height: metrics.screenHeight * .4 * 0.8,
        fontSize: 15,

    },




})
