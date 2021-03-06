import React, { useState } from 'react';
import {
    View, Text, StyleSheet, SafeAreaView
    , TextInput, Button,Image,
} from 'react-native';
import Metrics from '../Themes/Metrics';
import Icon from 'react-native-vector-icons/AntDesign';
import { Typography } from '@material-ui/core';
import BottomButton from './BottomButton';





export default function Login({navigation}) {
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />

    //constructor ish code here
    const [email, setEmail] = useState("Enter your email.");
    const [password, setPassword] = useState("Enter your password");
    

    return (
        <SafeAreaView style={styles.container}>


            <View style={styles.logoPic}>
                <Image
                    source={require('../assets/logo.png')}
                />
            </View>
            <View style={styles.loginCard}>
                <View style={{ alignItems: 'center', marginVertical:30}}>
                    <Text style={styles.title}>Sex Academy</Text>
                </View>
                <View style={styles.textView}>
                    <View style={styles.textIcon}>

                        <Icon name="user"
                            size={25}
                        />
                    </View>
                    <TextInput
                        
                        style={styles.textBox}
                        onChangeText={() => setEmail({email})}
                        value={email}
                        onSubmitEditing={() => { console.log("text submitted"); }}
                    />

                </View>

                <View style={styles.textView}>
                    <View style={styles.textIcon} >
                        <Icon name="lock"
                            size={25}
                        />
                    </View>
                    <TextInput
                        
                        style={styles.textBox}
                        onChangeText={() => setPassword({password})}
                        value={password}
                        onSubmitEditing={() => { console.log("password submitted"); }}
                    />

                </View>
                {/* <Button
                    onPress={console.log("button")}
                    title="Sign in"

                    accessibilityLabel="Learn more about this purple button"
                /> */}
                <View style={{marginTop:30}}>
                <BottomButton title='Sign In'
                callback={()=>{
                    if(email === "" || password ==="" || email ==="Enter your email" || password ==='Enter your password')
                    {alert('Please enter valid email and password');}
                    else{
                        navigation.navigate('Suggestions')}}

                    }
                />


                </View>
                

            </View>

        </SafeAreaView>

    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',


    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
    },
    loginCard: {
        flex: 2,
        height: Metrics.screenHeight / 2,
        width: Metrics.screenWidth,
        backgroundColor: '#fff',
    },
    logoPic: {
        flex: 1,
        alignSelf:'center',
        justifyContent:'center',
    },
    textBox: {


        flex: 8,


    },
    textIcon: {
        flex: 1,
        // resizeMode: 'contain',
        alignSelf: 'center',
    },
    textView: {
        flexDirection: 'row',
        alignSelf: 'center',
        width: Metrics.screenWidth * .8,
        height: 44,
        padding: 10,
        margin: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        justifyContent: 'center',
        borderRadius: Metrics.screenWidth * .6 * 0.2,

    },
    button: {
        width: 384,
        height: 526,

        left: 15,
        top: 368,
        backgroundColor: 'red',
    },
});

