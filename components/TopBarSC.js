import React, { Component } from "react";
import { StyleSheet, Text, View, Image} from 'react-native';
import BackButton from './BackButton';
import Metrics from '../Themes/Metrics';

class TopBarSC extends Component {

  render() {
    return (

      <View style={styles.header}>

                    <BackButton style={styles.backbutton}
                        callback={() => { console.log("pressed"); }}
                    />
                    <View style={styles.logo}>
                    <Image source={require('../assets/avatar.png')}/>
                    </View>

                </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Metrics.screenWidth,
    height: 80,
    backgroundColor: Metrics.lightPink,
    alignItems: 'center',
    justifyContent: 'space-between', // center, space-around
    paddingLeft: 20,
    paddingRight: 20
},
logo: {
  justifyContent: 'flex-end',
  width: 50,
  height: 50
},
backbutton: {
}
});


export default TopBarSC;