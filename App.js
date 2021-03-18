import { StatusBar } from 'expo-status-bar';
//for navigation
import 'react-native-gesture-handler';
// import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//react 
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/Home';
import HomeStatus from './components/HomeStatus';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Explore from './components/Explore';
import Article from './components/Article';
import Search from './components/Search';
import InterestedTopics from './components/InterestedTopics'
import TopBarSC from './components/TopBarSC'
import SingleContent from './components/SingleContent';
import StoryHeader from './components/StoryHeader';
import BackButton from './components/BackButton';
import StoryLanding from './components/Pages/StoryLanding';
import JournalSuggestions from './components/Pages/JournalSuggestions';
import JournalEntry from './components/Pages/JournalEntry';
import BottomBar from './components/BottomBar';
import BottomBarSC from './components/BottomBarSC';
import Share from './components/Share';
import StorySave from './components/Pages/StorySave';
import SecretSharerFirst from './components/Pages/SecretSharerFirst';
import SecretSharerWait from './components/Pages/SecretSharerWait';
import metrics from './Themes/Metrics';
import { SafeAreaView } from 'react-native-safe-area-context';
// 


const Stack = createStackNavigator();


export default function App() {

  return (
    

    <NavigationContainer>

      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: metrics.darkPink,
          },
          headerTitleStyle: {
            // color: 'transparent',
            fontWeight: 'bold',
            fontSize: 24,
          },
          headerTintColor:'#fff',
        }}>
        <Stack.Screen name='Home' component={Home} options={{title:''}} />
        <Stack.Screen name='Login' component={Login} options={{title: 'Login'}}/>
        <Stack.Screen name='Suggestions' component={InterestedTopics} />
        <Stack.Screen name='HomeStatus' component={HomeStatus} options={{title:''}}/>
        <Stack.Screen name='Explore' component={Explore} options={{title: 'Feed'}} />
        <Stack.Screen name='SingleContent' component={SingleContent}/>

      </Stack.Navigator>




      {/* <Home/> */}
    </NavigationContainer>


    // <View style={styles.container}>
    //  <JournalEntry/>

    // </View>






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
