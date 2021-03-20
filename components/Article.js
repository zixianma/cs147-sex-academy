import React, { Component } from "react";
import { StyleSheet, View, SafeAreaView, FlatList, StatusBar, Image } from "react-native";
import { SearchBar, Header, Card, Button, Icon, Text, withTheme } from 'react-native-elements';
import { SafeAreaProvider } from "react-native-safe-area-context";
import BottomBar from "../components/BottomBar";
import TopBar from "../components/TopBar";
import RecommendBar from "../components/RecommendBar"

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'How to talk to teenagers about porn',
      subtitle: 'Fighting unrealistic & unhealthy ideas about sex',
      author: 'Alisa Red',
      likes: 2021, 
      source: "Child Mind Insstitute"
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'I don’t know how to talk to my partnewr about sex',
      subtitle: 'Find advice on  how to talk to your partner about sex.',
      imageUrl: '../assets/home.png',
      author: 'Unknown author',
      likes: 2021,
      source: "Child Mind Insstitute"
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'I Love You, but I Hate the Way You Watch TV',
      subtitle: 'Deciding on the correct way to consume streaming media is a rich source of conflict.',
      imageUrl: '../assets/home.png',
      author: 'Sophia Benoit',
      likes: 2021,
      source: "GQ wellness"
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bc',
      title: 'How to talk to teenagers about porn',
      subtitle: 'Fighting unrealistic & unhealthy ideas about sex',
      author: 'Alisa Red',
      likes: 2021, 
      source: "Child Mind Insstitute"
    }
  ];


class Article extends Component {
  constructor(props){
    super(props);
  }

  render() {

    const Item = ({ title, subtitle, imageUrl, author, source, likes}) => (
        // <View style={styles.item}>
        //   <Text style={styles.title}>{title}</Text>
        // </View>
        <Card containerStyle={{borderWidth: 2, borderColor: 'black', borderRadius: 10, backgroundColor: "#FFF3F8"}}>
            {/* <Card.Image style={{borderRadius: 10}} source={require('../assets/cmi.png')}>
        </Card.Image> */}
        <Card.Title style={{textAlign: "left"}}>{title}</Card.Title>
        <Card.FeaturedSubtitle style={{textAlign: "left"}}><Text>{subtitle}</Text></Card.FeaturedSubtitle>
        <Card.Divider/>
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
      );

    const renderItem = ({ item }) => (
        <Item title={item.title} subtitle={item.subtitle} imageUrl={item.imageUrl} 
        author={item.author} source={item.source} likes={item.likes}/>
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
      style={styles.list}/>
      <BottomBar props={this.props}/>
        </SafeAreaProvider>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight
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

export default Article;