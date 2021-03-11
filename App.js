import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Explore from './components/Explore';
import Article from './components/Article';
import Search from './components/Search';


export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" /> */}
      {/* <Home></Home> */}

      {/* <Login></Login> */}
      {/* <SignUp></SignUp> */}
      {/* <Explore ></Explore> */}
      {/* {<Article></Article>} */}
      {<Search></Search>}

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
