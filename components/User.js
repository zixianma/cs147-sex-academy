import React, { Component } from "react";
import { StyleSheet, View, SafeAreaView, FlatList, StatusBar, Image } from "react-native";
import { SearchBar, Header, Card, Button, Icon, Text, withTheme } from 'react-native-elements';
import { SafeAreaProvider } from "react-native-safe-area-context";
import BottomBar from "./BottomBar";
import TopBar from "./TopBar";
import UserBar from "./UserBar"
import UserHeader from "./UserHeader"

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'How to talk to teenagers about porn',
      imageUrl: '../assets/home.png',
      author: 'Alisa Red',
      likes: 2021, 
      source: "Child Mind Insstitute"
    }
  ];


class User extends Component {

  render() {

    const Item = ({ title, imageUrl, author, source, likes}) => (
        // <View style={styles.item}>
        //   <Text style={styles.title}>{title}</Text>
        // </View>
        <View style={{flexDirection: "row"}}>
        <Card containerStyle={{borderWidth: 0}}>
            <Card.Image style={{borderRadius: 10}} source={require('../assets/cmi.png')}>
        </Card.Image>
        <Card.Divider/>
        <Card.Title style={{textAlign: "left"}}>{title}</Card.Title>
        <View style={{flex: 1, flexDirection: "row", alignItems: "center"}}> 
        <Text style={{flex: 3}}>
            {source? author + ' @ ' + source: author}
          </Text>
          <View style={{flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "space-around"}}>
              <Icon name='heart' type='feather' color='pink'/>
              <Text style={{}}>{likes}</Text>
          </View>
          </View>
       
      </Card>
      <Card containerStyle={{borderWidth: 0}}>
            <Card.Image style={{borderRadius: 10}} source={require('../assets/cmi.png')}>
        </Card.Image>
        <Card.Divider/>
        <Card.Title style={{textAlign: "left"}}>{title}</Card.Title>
        <View style={{flex: 1, flexDirection: "row", alignItems: "center"}}> 
        <Text style={{flex: 3}}>
            {source? author + ' @ ' + source: author}
          </Text>
          <View style={{flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "space-around"}}>
              <Icon name='heart' type='feather' color='pink'/>
              <Text style={{}}>{likes}</Text>
          </View>
          </View>
       
      </Card>
      </View>
      );

    const renderItem = ({ item }) => (
        <Item title={item.title} imageUrl={item.imageUrl} author={item.author} source={item.source} likes={item.likes}/>
      );    

    return (
      <SafeAreaView style={styles.container}>
          <SafeAreaProvider>
        <UserHeader />
        <UserBar />
<FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      style={styles.list}/>
      <View style={styles.story_stats}>
        <Text style={{fontWeight: "bold", fontSize: 20}}>Your Story Statistics:</Text>
        <View style={{flexDirection: 'row', marginVertical: 20, justifyContent: 'space-between'}}> 
        <View style={styles.icon_view}><Icon  type='feather' name='heart' /><Text>10k likes</Text></View>
        <View style={styles.icon_view}><Icon  type='feather' name='star' /><Text>42k archives</Text></View>
        <View style={styles.icon_view}><Icon  type='feather' name='eye' /><Text>100k views</Text></View>
        </View>
      </View>
      <BottomBar />
        </SafeAreaProvider>
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
  search: {
      backgroundColor: 'white',
      width: 100
  }, 
  list: {
      margin: 20
  },
  story_stats: {
    marginVertical: 20,
    marginHorizontal: 30, 
    padding: 10
  }, 
  icon_view: {
    padding: 10
  }
});

export default User;