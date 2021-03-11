import React, { Component } from "react";
import { StyleSheet, View, SafeAreaView, FlatList, StatusBar, Image } from "react-native";
import { SearchBar, Header, Card, Button, Icon, Text, withTheme } from 'react-native-elements';
import { SafeAreaProvider } from "react-native-safe-area-context";
import BottomBar from "../components/BottomBar";
import TopBar from "../components/TopBar";

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      imageUrl: '../assets/home.png',
      description: 'I love this pic'
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      imageUrl: '../assets/home.png',
      description: 'I love this pic'
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      imageUrl: '../assets/home.png',
      description: 'I love this pic'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d73',
        title: 'Third Item',
        imageUrl: '../assets/home.png',
        description: 'I love this pic'
      },
  ];


class Explore extends Component {

  render() {

    const Item = ({ title, imageUrl, description}) => (
        // <View style={styles.item}>
        //   <Text style={styles.title}>{title}</Text>
        // </View>
        <Card>
        <Card.Title>{title}</Card.Title>
        <Card.Divider/>
        <Card.Image source={require('../assets/cmi.png')}>
          <Text style={{marginBottom: 10}}>
            {description}
          </Text>
        </Card.Image>
      </Card>
      );

    const renderItem = ({ item }) => (
        <Item title={item.title} imageUrl={item.imageUrl} description={item.description} />
      );    

    return (
      <SafeAreaView style={styles.container}>
          <SafeAreaProvider>
        <TopBar />
<FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      style={styles.list}/>
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
    backgroundColor: "#f9c2ff",
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