import React, { useState } from 'react';
import { TouchableOpacity, TextInput, View, StyleSheet, Text, SafeAreaView, Image } from 'react-native';
import metrics from '../../Themes/Metrics';
import BackButton from '../BackButton';
import BottomBar from '../BottomBar';
import StoryHeader from '../StoryHeader';
import BottomButton from '../BottomButton';

import { Divider } from 'react-native-elements'; //for textbox 
import StoryButtons from '../StoryButtons';
import Share from '../Share';




export default function ContentEntry() {
    const [title, setTitle] = useState('');
    const [mood, setMood] = useState("");
    const [journal, setJounral] = useState("Write here...");

    return (
        <SafeAreaView>
            <View style={styles.container}>

                <Image source={require('../../assets/back-btn')}></Image>
                <View style={styles.body}>
                    <View style={styles.prompt}>
                        <Text style={{ fontSize: 21, }}>Only you can view your story, unless you choose to
                        share it with others.
                        </Text>
                        <View style={styles.textView}>
                            <View style={styles.label}>
                                <Text>Title   </Text>
                            </View>
                            <Text>:  </Text>

                            <TextInput
                                style={styles.textBox}
                                onChangeText={() => { setTitle({ title }) }}
                                value={title}
                            />


                        </View>

                        <View style={styles.textView}>
                            <View style={styles.label}>
                                <Text>Link   :</Text>
                            </View>
                            <Text>:  </Text>
                            {/* <Divider style={{ backgroundColor: 'blue' }} /> */}
                            <TextInput
                                style={styles.textBox}
                                onChangeText={() => { setMood({ mood }) }}
                                value={mood}
                            />


                        </View>
                        {/* <View style={styles.textView}>
                            <Image source={require('../../assets/journalLayout.png')} />
                        </View> */}
                        <View style={styles.boxView}>
                            <TextInput
                                style={styles.box}
                                onChangeText={() => { setJounral({ journal }) }}
                                value={journal}
                                multiline={true}
                                scrollEnabled={true}
                                blurOnSubmit={true}
                                returnKeyLabel='done'
                            />

                        </View>

                        {/* <View style ={styles.box}></View> */}

                        <View style={styles.buttonBar}>
                        <StoryButtons title= {'Cancel'}
                        
                        />
                        <StoryButtons title={'Next'}
                           callback = {()=>{
                               return <Share/>
                           }}
                        />
                        </View>
                        

                    </View>

                </View>



                {/* <BottomBar /> */}

            </View>


        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: metrics.screenWidth,
        justifyContent: 'space-between',
    },
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,

    },
    textView: {
        //for textBox
        color: 'gray',
        flexDirection: 'row',
        alignSelf: 'center',
        height: 44,
        width: metrics.screenWidth * 0.8,
        padding: 10,
        margin: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: metrics.screenWidth * .6 * 0.05,

        // backgroundColor: '#FFF3F8',
    },//for label of textinput
    label: {
        marginRight: 10,
        flex: 2,

        // backgroundColor:'blue',

    },
    textBox: {
        flex: 8,
    },
    box: {
        // flex:1,
        // justifyContent:'flex-start',
        // alignItems:'flex-start',
        //  backgroundColor:'green',
        flexDirection: 'row',
        paddingVertical:30,
        paddingHorizontal:20,
        borderRadius: 20,
        flexWrap: 'wrap',
        backgroundColor: '#F2F2F2',
        width: metrics.screenWidth * 0.9,
        height: metrics.screenHeight * .4,
        fontSize: 15,

    },
    boxView: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
   
    buttonBar:{
        marginTop:20,
        flexDirection:'row', 
        justifyContent:'space-evenly',

    },


})

