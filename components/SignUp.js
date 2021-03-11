import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import metrics from '../Themes/Metrics';

export default function SignUp() {
    const [name, setName] = useState("Full name");
    const [email, setEmail] = useState("Enter email");
    const [profession, setProfession] = useState("Enter profession");
    const [age, setAge] = useState("Age");
    //parent needed? 


    return (
        <View>
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <View >
                        <Icon name="arrow-back-circle-outline"
                            size="50"
                            style={styles.pic}
                        />
                    </View>
                    <View>
                        <Image
                            style={styles.logo}
                            size="50"
                            source={require('../assets/logo.png')}
                        />
                    </View>
                </View>
                <View>
                    <Text style={styles.title}>Sign-Up</Text>
                </View>

                <View style={styles.textView}>
             

                    <View>
                        <TextInput
                            value={name}
                            style={styles.textBox}
                            onChangeText={(name) => setEmail(name)}
                            onSubmitEditing={() => { console.log("text submitted"); }}
                        />
                    </View>
                </View>

            </SafeAreaView>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: metrics.screenHeight * 0.08,
        width: metrics.screenWidth,

    },
    logo: {
        flex: 1,
        justifyContent: 'flex-end',
        margin: 10,
        marginRight: 0,
        resizeMode: 'contain',


    },
    pic: {
        flex: 1,
        justifyContent: 'flex-start',
        margin: 10,

        // resizeMode: 'contain',
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        alignSelf: 'center',
    },

    textView: {
        flexDirection: 'row',
        alignSelf: 'center',
        width: metrics.screenWidth * .8,
        height: 44,
        padding: 10,
        margin: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        justifyContent: 'center',
        borderRadius: metrics.screenWidth * .6 * 0.2,
    },


        textIcon: {
            flex: 1,
            resizeMode: 'contain',
            alignSelf: 'center',
        },



})
