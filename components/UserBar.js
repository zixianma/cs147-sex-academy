import React, { Component } from "react";
import { StyleSheet, View, SafeAreaView, FlatList, StatusBar, Image, Dimensions } from "react-native";
import { ButtonGroup, Text, Icon } from 'react-native-elements';
import { SafeAreaProvider } from "react-native-safe-area-context";
import Metrics from "../Themes/Metrics"

class UserBar extends Component {
    constructor () {
        super()
        this.state = {
          selectedIndex: 2
        }
        this.updateIndex = this.updateIndex.bind(this)
        this.windowWidth = Dimensions.get('window').width;
      }
      updateIndex (selectedIndex) {
        this.setState({selectedIndex})
      }
      
      render () {
        const component1 = () => <View><Text style={styles.text}>Stories</Text></View>
        const component2 = () => <View><Text style={styles.text}>Likes</Text></View>
        const component3 = () => <View><Text style={styles.text}>Archives</Text></View>

        const buttons = [{ element: component1 }, { element: component2 }, { element: component3 }]
        const { selectedIndex } = this.state
        return (
          <ButtonGroup 
            onPress={this.updateIndex}
            selectedIndex={selectedIndex}
            buttons={buttons}
            selectedButtonStyle={{backgroundColor: Metrics.warmYellow}}
            containerStyle={{width: 0.8 * this.windowWidth, height: 60, borderRadius: 20, borderColor: 'black', borderWidth: '3', alignSelf: 'center'}} />
        )
      }
}
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  }
  });
export default UserBar;