import React from 'react'
import { Text,TouchableOpacity, StyleSheet } from 'react-native';
import metrics from '../Themes/Metrics';
export default function StoryButtons(props) {
    
    return (
        <TouchableOpacity
            style={styles.button}
        >
            <Text style={styles.text}> {props.title}</Text>
        </TouchableOpacity>


    )
}

const styles = StyleSheet.create({
    button: {
        alignSelf: 'center',
        width: metrics.screenWidth * .3,
        borderRadius: metrics.screenWidth * .3,
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
