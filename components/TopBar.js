import React, { Component } from "react";
import { SearchBar } from 'react-native-elements';
import { StyleSheet, Text, View, Image} from 'react-native';
import { Pressable } from "react-native";

class TopBar extends Component {
  constructor(props){
    super(props);
  }

  state = {
    search: '',
}
// this.updateIndex = this.updateIndex.bind(this)
// this.windowWidth = Dimensions.get('window').width;
updateSearch = (search) => {
this.setState({ search });
};

  render() {
    const { search } = this.state;
    return (
      <View style={styles.container}>
        <View style={{flex: 6}}>
          <Pressable
        onPress={()=>{
        this.props.props.navigation.navigate('Search');
        }}>
          <SearchBar platform="android"
        placeholder="Search..."
        onChangeText={this.updateSearch}
        value={search}
        style={styles.search}/>
        </Pressable>
        </View>

        <View style={{flex: 1}}>
          <Pressable onPress={()=>{
        this.props.props.navigation.navigate('User');}}>
          <Image style={styles.tinyLogo} source={require('../assets/avatar.png')}/>
          </Pressable>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    height: 60,
    flexDirection: 'row', // row
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between', // center, space-around
    paddingLeft: 20,
    paddingRight: 20
  },
  tinyLogo: {
    width: 50,
    height: 50
  }, 
  search: {
      width: 200,
      flex: 5,
      borderColor: 'grey',
      borderWidth: 2,
      borderRadius: 10,
      paddingLeft: 10
  },
});


export default TopBar;