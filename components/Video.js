import React, { Component } from "react";
import { StyleSheet, View, SafeAreaView, FlatList, StatusBar, Image, Pressable } from "react-native";
import { SearchBar, Header, Card, Button, Icon, Text, withTheme } from 'react-native-elements';
import { SafeAreaProvider } from "react-native-safe-area-context";
import BottomBar from "./BottomBar";
import TopBar from "./TopBar";
import RecommendBar from "./RecommendBar";
import Metrics from "../Themes/Metrics"
//linking
import * as Linking from 'expo-linking';
import SingleContent from "./SingleContent";


const DATA = [
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d73',
    title: 'Getting this party started',
    imageUrl: require('../assets/demo_3.png'),
    author: 'The Dildorks',
    likes: 2021,
    source: "Podcast"
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'How to talk to teenagers about porn',
    imageUrl: require('../assets/demo_0.png'),
    author: 'Alisa Red',
    likes: 2021,
    source: "Child Mind Insstitute"
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'How porn changes the way teens think about sex',
    imageUrl: require('../assets/demo_1.png'),
    author: 'Emily F. Rothman',
    likes: 2021,
    source: "TEDMED"
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Losing my v card, masturbation, and other...',
    imageUrl: require('../assets/demo_2.png'),
    author: 'Ashley aka bestdressed',
    likes: 2021,
    source: "Youtube"
  },
];


class Explore extends Component {
  constructor(props){
    super(props);
  }

  render() {

    const Item = ({ title, imageUrl, author, source, likes }) => (
      // <View style={styles.item}>
      //   <Text style={styles.title}>{title}</Text>
      // </View>
      <Pressable
      onPress={()=>{
        this.props.navigation.navigate('SingleContent');}}
        // return <SingleContent/>}}
      // }}
      
      >
          <Card containerStyle={{borderWidth: 2, borderColor: 'transparent', borderRadius: 10,}}
    
    >
      <Card.Image style={{ borderRadius: 10 }} source={imageUrl}>
      </Card.Image>
      <Card.Divider />
      <Card.Title style={{ textAlign: "left" }}>{title}</Card.Title>
      <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
        <Text style={{ flex: 3 }}>
          {source ? author + ' @ ' + source : author}
        </Text>
        <View style={{ flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "space-around" }}>
          <Icon name='heart' type='feather' color='pink' />
          <Text style={{}}>{likes}</Text>
        </View>
      </View>

    </Card>


      </Pressable>
    
    );

    const renderItem = ({ item }) => (
      <Item title={item.title} imageUrl={item.imageUrl} author={item.author} source={item.source} likes={item.likes} />
    );

    return (
      <SafeAreaView style={styles.container}>
        <SafeAreaProvider>
          <TopBar props={this.props}/>
          <RecommendBar props={this.props}/>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            style={styles.list} />
          <BottomBar props={this.props} />
        </SafeAreaProvider>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    width: Metrics.screenWidth 
  },
  item: {
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 24
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  search: {
    backgroundColor: 'white',
    width: 100
  },
  list: {
    margin: 20
  }
});

export default Explore;
