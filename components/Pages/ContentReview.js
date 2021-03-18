import React, { useState } from 'react';
import {
    Pressable, TextInput, View,
    StyleSheet, Text, SafeAreaView, Image
} from 'react-native';
import metrics from '../../Themes/Metrics';
import BackButton from '../BackButton';
import BottomBar from '../BottomBar';
import StoryHeader from '../StoryHeader';
import BottomButton from '../BottomButton';

import { Divider } from 'react-native-elements'; //for textbox 
import StoryButtons from '../StoryButtons';
import Share from '../Share';




export default function ContentReview(props) {
    const [title, setTitle] = useState('');
    const [mood, setMood] = useState("");
    const [journal, setJounral] = useState("Write here...");
    const [video, onVideo] = React.useState(false);
    const [article, onArticle] = React.useState(false);
    const [podcast, onPodcast] = React.useState(true);
    const [story, onStory] = React.useState(false);
    const [topic1, onTopic1] = React.useState(false);
    const [topic2, onTopic2] = React.useState(true);
    const [topic3, onTopic3] = React.useState(false);
    

    return (
        <SafeAreaView>
            <View style={styles.container}>

                
                <View style={styles.body}>
                    <View >
                    <Image style={styles.thumbnail} source={require('../../assets/thumbnail.png')}></Image>
                    <View style={styles.boxView}>
                    
                            <TextInput
                                style={styles.box}
                                onChangeText={() => { setJounral({ journal }) }}
                                value={'Sharing this amazing content to folks interested in better sex ; )'}
                                multiline={true}
                                scrollEnabled={true}
                                blurOnSubmit={true}
                                returnKeyLabel='done'
                            />
                        </View>
                        <View style={{height: metrics.screenHeight * 0.5 - 50}}>
                        <Text style={styles.tag_title}>Link</Text>
                        <View style={styles.textView}>
                           
                                
                          
                            {/* <Divider style={{ backgroundColor: 'blue' }} /> */}
                            <TextInput
                                style={styles.textBox}
                                onChangeText={() => { setMood({ mood }) }}
                                value={'https://www.juliet-allen.com/podcasts/028-new-year-rituals-for-better-sex'}
                            />


                        </View>
                        <Text style={styles.tag_title}>Format tag</Text>
                        <View style={styles.suggestions}>
                       

                                <Pressable onPress={() => onVideo(!video)}>
                                    <View style={video ? styles.textViewPressed : styles.textViewBefore}>
                                        <Text>Video</Text>
                                    </View>
                                </Pressable>
                                <Pressable onPress={() => onArticle(!article)}>
                                    <View style={article ? styles.textViewPressed : styles.textViewBefore}>
                                        <Text>Article</Text>
                                    </View>
                                </Pressable>
                                <Pressable onPress={() => onPodcast(!podcast)}>
                                    <View style={podcast? styles.textViewPressed : styles.textViewBefore}>
                                        <Text>Podcast</Text>
                                    </View>
                                </Pressable>
                                <Pressable onPress={() => onStory(!story)}>
                                    <View style={story ? styles.textViewPressed : styles.textViewBefore}>
                                        <Text>Story</Text>
                                    </View>
                                </Pressable>
                                
                            </View>
                            <Text style={styles.tag_title}>Content tag</Text>
                        <View style={styles.suggestions}>
                       

                                <Pressable onPress={() => onTopic1(!topic1)}>
                                    <View style={topic1 ? styles.textViewPressed : styles.textViewBefore}>
                                        <Text>Masturbation</Text>
                                    </View>
                                </Pressable>
                                <Pressable onPress={() => onTopic2(!topic2)}>
                                    <View style={topic2 ? styles.textViewPressed : styles.textViewBefore}>
                                        <Text>Relationships and Sex </Text>
                                    </View>
                                </Pressable>
                                <Pressable onPress={() => onTopic3(!topic3)}>
                                    <View style={topic3? styles.textViewPressed : styles.textViewBefore}>
                                        <Text>Assault Prevention</Text>
                                    </View>
                                </Pressable>
                                
                            </View>
</View>
                        <View style={styles.buttonBar}>
                            <StoryButtons title={'Cancel'}
                                callback={() => {
                                    props.navigation.navigate('Review');
                                }}
                            />
                            <StoryButtons title={'Share'}
                                callback={() => {
                                    props.navigation.navigate('Explore');
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
        // borderWidth: 1,
        // borderColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        backgroundColor: '#F2F2F2',
    },//for label of textinput
    label: {
        marginRight: 10,
        flex: 2,
        fontSize: 16,
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
        paddingHorizontal: 20,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        flexWrap: 'wrap',
        backgroundColor: '#F2F2F2',
        width: metrics.screenWidth * 0.8,
        height: metrics.screenHeight * .1,
        fontSize: 15,
        alignSelf: 'center',
        marginLeft: 20
    },
    boxView: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        height: metrics.screenHeight * 0.1
    },

    buttonBar: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-evenly',

    },
    suggestions: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    textViewBefore: {
        flexDirection: 'row',
        alignSelf: 'center',

        height: 44,
        padding: 10,
        margin: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        justifyContent: 'center',
        borderRadius: 15,
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
        borderRadius: 15,
        backgroundColor: '#FF89BB',

    },
    tag_title: {
        marginLeft: 15,
        fontSize: 20,
        marginTop: 5
    },
    thumbnail: {
        height: metrics.screenHeight * .2, 
        width: metrics.screenWidth * .8,  
        marginTop: 50, 
        alignSelf: 'center',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15
    }
})

