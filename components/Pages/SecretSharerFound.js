import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import metrics from '../../Themes/Metrics';
import BottomBar from '../BottomBar';
export default function SecretSharerFound(props) {
    const [message, setMessage] = useState('Type your message');
    const [sent, setSent] = useState(false);


    const messageView= (message)=>{
        return (<View style={styles.chat}>
            <Text>message</Text>
            
            
        </View>)
    }

    useEffect(()=>{
        console.log(message);
    });
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ alignSelf: 'center' }}>
                <Text style={{ color: 'gray' }}>
                    18 March, 2020
               </Text>

            </View>
            <View style={{ alignSelf: 'center' }}>
                <Text style={{ color: 'gray' }}>Message from Sex Academy Helper</Text>

            </View>
            <View>
                {/* blurb 1 */}
                <View style={styles.chat}>
                    <View style={styles.thumbnail}>
                        <Image
                            style={styles.image}
                            source={require('../../assets/alisa.png')}

                        />
                    </View>
                    <View style={{ flex: 8, }}>
                        <Text style={styles.text}>Hey, we found you a Secret Sharer based on your similar experiences. Meet @Polaris!</Text>
                    </View>

                   
                </View>

            </View>

            {/* blur 2 */}

            <View style={styles.chat}>
                <View style={styles.thumbnail}>
                    <Image
                        style={styles.image}

                        source={require('../../assets/alisa.png')}

                    />
                </View>
                <View style={{ flex: 8, }}>
                    <Text style={styles.text}>Sex Academy is a respectful and inclusive platform. We are committed to users' safety
                    ,privacy, and dignity. If any abusive or discriminatory language is used, or any undue harms are
                    caused, please report to us immediately.
                        </Text>
                </View>
            </View>
            {sent === true ?
                    messageView({message}) : console.log('hi')}

            <View style={styles.box}>

                <TextInput
                    onChangeText={() => { setMessage({message}) }}
                    value={message}
                    multiline={true}
                    scrollEnabled={true}
                    blurOnSubmit={true}
                    returnKeyLabel='done'
                    onSubmitEditing={() => { setSent(true); }}
                />


            </View>
            <BottomBar props={props} />

            {/* </View> */}

            {/* </View > */}

        </SafeAreaView >
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',


    },
    chat: {
        // flex:1,

        flexDirection: 'row',
        // justifyContent: 'space-between',

        // width: metrics.screenWidth * 0.7,
        // backgroundColor: 'red',

        margin: 10,
        padding: 10,
        borderRadius: 20,
        backgroundColor: '#FFE8E8',
        borderWidth: 2,


    },
    thumbnail: {
        flex: 1,
        alignSelf: 'flex-start',
        marginRight: 10,

    },
    image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain',
    },
    text: {
        fontSize: 16,
        lineHeight: 30,

    },
    box: {
        alignSelf: 'flex-end',

        flexDirection: 'row',
        paddingVertical: 30,
        paddingHorizontal: 20,
        borderRadius: 20,
        flexWrap: 'wrap',
        backgroundColor: '#F2F2F2',
        width: metrics.screenWidth * .9,
        height: metrics.screenHeight * .1,
        fontSize: 15,
        margin: 10,
        // backgroundColor:'red',

    }

})

