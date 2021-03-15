import React, { Component } from "react";
import { StyleSheet, View, SafeAreaView, FlatList, StatusBar, Image, Pressable } from "react-native";
import { SearchBar, Header, Card, Button, Icon, Text, withTheme } from 'react-native-elements';
import { SafeAreaProvider } from "react-native-safe-area-context";
import BottomBarSC from "../components/BottomBarSC";
import TopBarSC from "../components/TopBarSC";
import RecommendBar from "../components/RecommendBar"

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'How to talk to teenagers about porn',
      imageUrl: '../assets/home.png',
      author: 'Alisa Red',
      likes: 2021, 
      source: "Child Mind Insstitute",
      content: "In this audible original series, Esther Perel invites listeners into her office, where she helps couples navigate complicated relationships and sexual struggles. While not every episode of Where Should We Begin? deals with sexuality, we find this podcast helps us better understand and community with our partners—both in and out of the bedroom. Episodes average 45 to 60 minutes.",
      date: "March 15, 2021",
    }
  ];


class SingleContent extends Component {
    state = {
        followed: false,
    }
    // this.updateIndex = this.updateIndex.bind(this)
    // this.windowWidth = Dimensions.get('window').width;
    updateFollow = () => {
    this.setState({followed: !this.state.followed});
    };

  render() {

    const Item = ({ title, imageUrl, author, source, likes, content, date}) => (
            <View style={styles.cardView}>
                <View style={{flex: 1, flexDirection: "row", alignItems: "center", height: 80}}> 
                
                <Image style={styles.authorAvatar} source={require('../assets/alisa.png')}/>
                <View style={{flex: 2, marginLeft: 15}}>
                <Text style={{fontWeight: "bold"}} >
            { author}
          </Text>
          <Text >
            {date}
          </Text>
                </View>
        
          <View style={{flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "space-around"}}>
          <Pressable onPress={this.updateFollow}>
              {this.state.followed?
           <Image source={require('../assets/follow-btn-yellow.png')}/>
          :
          <Image source={require('../assets/follow-btn-pink.png')}/>
              }
            </Pressable>
          </View>
          </View>
                 <Card.Title style={{textAlign: "left", fontSize: 26}}>{title}</Card.Title>
            <Card.Image style={{borderRadius: 10}} source={require('../assets/cmi.png')}>
        </Card.Image>
        <Card.Divider/>
       
        
          <View><Text style={styles.content}>{content}</Text></View>
          </View>
       
      );

    const renderItem = ({ item }) => (
        <Item title={item.title} imageUrl={item.imageUrl} author={item.author} 
        source={item.source} likes={item.likes} content={item.content} date={item.date}
        />
      );    

    return (
      <SafeAreaView style={styles.container}>

        <TopBarSC />
<FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      style={styles.list}/>
      {/* <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      style={styles.list}/> */}
      <BottomBarSC />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16
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
  list: {
      margin: 20
  },
  cardView: {
      margin: 20
  },
  content: {
      lineHeight: 25,
      fontSize: 20
  }, 
  authorAvatar: {
    width: 50,
    height: 50,
    justifyContent: 'flex-start'
  }
});

export default SingleContent;