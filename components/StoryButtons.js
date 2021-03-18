import React from 'react'
import { Text,TouchableOpacity, StyleSheet } from 'react-native';
import metrics from '../Themes/Metrics';
import Share from '../components/Share';
export default function StoryButtons(props) {
    
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={()=>{props.callback()}}
        >
            <Text style={styles.text}> {props.title}</Text>
        </TouchableOpacity>


    )
}

const styles = StyleSheet.create({
    button: {
        alignSelf: 'center',
        width: metrics.screenWidth * .3,
        borderRadius: 15,
        height: 50,
        backgroundColor: '#18191F',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#ffffff',
        fontSize: 24,
        fontWeight: 'bold',
    },
})
