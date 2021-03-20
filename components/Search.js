import React, { Component } from "react";
import { SearchBar, Card, Icon } from 'react-native-elements';
import { StyleSheet, Text, View, StatusBar, Image, Pressable} from 'react-native';
import metrics from '../Themes/Metrics';
import { SafeAreaView } from "react-native-safe-area-context";

class Search extends Component {
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
        <SafeAreaView style={styles.container}>
      <View style={styles.search_container}>
        <View style={{flex: 6}}>
          <Pressable onPress={()=>{
        this.props.navigation.navigate('Results');
        }}>
          <SearchBar platform="android"
        placeholder="Search..."
        onChangeText={this.updateSearch}
        value={search}
        style={styles.search}/>
        </Pressable>
        </View>
      </View>
      <Card containerStyle={{borderWidth: 2, borderColor: 'black', borderRadius: 10, backgroundColor: "#FFF3F8"}}>
        
        <Card.Title style={{textAlign: "left"}}>Search History</Card.Title>
        <View style={{flexDirection: "row"}}>
       <Text style={styles.textBubble}>Sex education</Text>
       <Text style={styles.textBubble}>Birth control</Text>
       </View>
       
      </Card>
      <Card containerStyle={{borderWidth: 2, borderColor: 'black', borderRadius: 10, backgroundColor: "#FFF3F8"}}>
        
        <Card.Title style={{textAlign: "left"}}>Popular Topics</Card.Title>
        {/* <Card.Divider/> */}
        <View style={{flexDirection: "row"}}>
       <Text style={styles.textBubble}>Sex education</Text>
       <Text style={styles.textBubble}>Birth control</Text>
       
       
       </View>
       <View style={{flexDirection: "row"}}>
       <Text style={styles.textBubble}>Healthy relationship</Text>
       <Text style={styles.textBubble}>Beauty standard</Text>
       
       </View>
       <View style={{flexDirection: "row"}}>
       <Text style={styles.textBubble}>Resources for children</Text>
       <Text style={styles.textBubble}>Sexuality</Text>
       
       </View>
       <View style={{flexDirection: "row"}}>
       <Text style={styles.textBubble}>Porn content consumption</Text>
       
       </View>
       

       
      </Card>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    width: metrics.screenWidth
  },
  search_container: {
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
  textBubble: {
      padding: 10,
      borderWidth: 2,
      borderColor: 'grey',
      borderRadius: 15,
      margin: 5
  }
});


export default Search;