import React, { Component } from "react";
import { StyleSheet, View, SafeAreaView, FlatList, StatusBar, Image, Dimensions } from "react-native";
import { ButtonGroup, Text, Icon } from 'react-native-elements';
import { SafeAreaProvider } from "react-native-safe-area-context";

class BottomBar extends Component {
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
        const component1 = () => <View><Icon name='home' type='feather' color='black'/><Text>Explore</Text></View>
        const component2 = () => <View><Icon reverse name='plus' type='feather' color='#FF89BB'/></View>
        const component3 = () => <View><Icon name='edit' type='feather' color='black'/><Text>Story</Text></View>

        const buttons = [{ element: component1 }, { element: component2 }, { element: component3 }]
        const { selectedIndex } = this.state
        return (
          <ButtonGroup
            onPress={this.updateIndex}
            selectedIndex={selectedIndex}
            buttons={buttons}
            selectedButtonStyle={{backgroundColor: "#FFC7DE"}}
            containerStyle={{width: this.windowWidth, height: 60}} />
        )
      }
}

export default BottomBar;