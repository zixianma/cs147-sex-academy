import React, { Component } from "react";
import { StyleSheet, View, SafeAreaView, FlatList, StatusBar, Image, Dimensions } from "react-native";
import { ButtonGroup, Text, Icon } from 'react-native-elements';
import { SafeAreaProvider } from "react-native-safe-area-context";

class BottomBar extends Component {
    constructor (props) {
        super(props);
        console.log('p bottom bar', props);
        this.state = {
          selectedIndex: 0
        }
        this.updateIndex = this.updateIndex.bind(this)
        this.windowWidth = Dimensions.get('window').width;
      }
      updateIndex (selectedIndex) {
        this.setState({selectedIndex});
        if (selectedIndex == 0){
          this.props.props.navigation.navigate('Explore');
        } else if (selectedIndex == 1) {
          this.props.props.navigation.navigate('Share');
        } else {
          this.props.props.navigation.navigate('Story');
        }

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
            innerBorderStyle={{color:'transparent'}}
            selectedButtonStyle={{backgroundColor: "#FFC7DE", borderRadius: 20}}
            containerStyle={{width: this.windowWidth, height: 70, borderColor:'transparent', marginHorizontal: 0}} />
        )
      }
}

export default BottomBar;