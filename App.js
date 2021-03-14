import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Explore from './components/Explore';
import Article from './components/Article';
import Search from './components/Search';
import InterestedTopics from './components/InterestedTopics'


export default function App() {
  return (
    <View style={styles.container}>
      {/* <Home></Home> */}

      {/* <Login></Login> */}
      {/* <Explore ></Explore> */}
      {/* <Article></Article> */}
      {/* <Search></Search> */}
      <InterestedTopics></InterestedTopics>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
