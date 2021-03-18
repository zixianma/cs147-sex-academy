import React, { Component } from "react";
import { StyleSheet, View, SafeAreaView, FlatList, StatusBar, Image, Dimensions } from "react-native";
import { ButtonGroup, Text, Icon } from 'react-native-elements';
import { SafeAreaProvider } from "react-native-safe-area-context";
import metrics from "../Themes/Metrics";

class BottomBar extends Component {
    constructor (props) {
        super(props);
        this.state = {
          selectedIndex: 0
        }
        this.updateIndex = this.updateIndex.bind(this)
        this.windowWidth = Dimensions.get('window').width;
      }
      updateIndex (selectedIndex) {
        this.setState({selectedIndex});
        if (selectedIndex == 2){
          this.props.props.navigation.navigate('Article');
        } else {
          this.props.props.navigation.navigate('Explore');
        }
      }
      
      render () {
        const component1 = () => <View><Text style={{fontWeight: 'bold'}}>All</Text></View>
        const component2 = () => <View><Text style={{fontWeight: 'bold'}}>Video</Text></View>
        const component3 = () => <View><Text style={{fontWeight: 'bold'}}>Article</Text></View>
        const component4 = () => <View><Text style={{fontWeight: 'bold'}}>Audio</Text></View>

        const buttons = [{ element: component1 }, { element: component2 }, { element: component3 }, { element: component4 }]
        const { selectedIndex } = this.state
        return (
          <View style={styles.container}>
          <ButtonGroup 
            onPress={this.updateIndex}
            selectedIndex={selectedIndex}
            buttons={buttons}
            innerBorderStyle={{color:'transparent'}}
            selectedButtonStyle={{backgroundColor: metrics.lightPink}}
            containerStyle={{width: this.windowWidth, height: 60, backgroundColor: metrics.pink, marginHorizontal: 0}} />
        </View>
        )
      }
}

export default BottomBar;

const styles = StyleSheet.create({
  container: {
  }
});