import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TextInput, Pressable} from 'react-native';
import { Icon } from 'react-native-elements';
import BackButton from './BackButton';
import Metrics from '../Themes/Metrics';

const BottomBarSC = () => {
  const [text, onChangeText] = React.useState(null);
  const [liked, onPressLike] = React.useState(false);
  const [starred, onPressStar] = React.useState(false);

  return (

    <View style={styles.header}>
<View style={{flex: 2, flexDirection: 'row', alignItems:"center"}}> 
<TextInput
      style={styles.input}
      onChangeText={onChangeText}
      value={text}
      placeholder="comment"
      keyboardType="numeric"
    />
  <Icon style={{justifyContent: "flex-end"}} name='send' type='feather' color='black'/></View>

    
                  <View style={{flex: 2, flexDirection: "row", justifyContent: "space-around"}} >
         
                  {/* <Icon style={{}} name='heart' type='feather' color='black'/>
                  <Icon style={{}} name='star' type='feather' color='black'/>
                  <Icon style={{}} name='share' type='feather' color='black'/> */}
                  <Pressable onPress={() => onPressLike(!liked)}>
              {liked?
               
                 <View style={{flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "space-around"}}>
                     <Image source={require('../assets/heart-red.png')}/>
                     <Text>2022</Text>
                 </View>
          :
          <View style={{flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "space-around"}}>
                     <Image source={require('../assets/heart-white.png')}/>
                     <Text>2021</Text>
                 </View>
          
              }
            </Pressable>
            <Pressable onPress={() => onPressStar(!starred)}>
              {starred?
               <View style={{flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "space-around"}}>
               <Image source={require('../assets/star-yellow.png')}/>
               <Text>99</Text>
           </View>
          
          :
          <View style={{flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "space-around"}}>
                     <Image source={require('../assets/star-white.png')}/>
                     <Text>98</Text>
                 </View>
         
              }
            </Pressable>
            <Pressable onPress={() => onPressLike(!liked)}>
           <Image source={require('../assets/share.png')}/>
          
            </Pressable>
                  </View>

              </View>
  );
};

// class BottomBarSC extends Component {

//   render() {
//     const [text, onChangeText] = React.useState("Useless Text");
//     const [number, onChangeNumber] = React.useState(null);

    
//   }
// }

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Metrics.screenWidth,
    height: 80,
    backgroundColor: Metrics.lightPink,
    alignItems: 'center',
    justifyContent: 'space-between', // center, space-around
    paddingLeft: 20,
    paddingRight: 20
},
logo: {
  justifyContent: 'flex-end',
  width: 50,
  height: 50
},
backbutton: {
},
input: {
  height: 40,
  width: Metrics.screenWidth * 0.3,
  margin: 12,
  padding: 10, 
  borderWidth: 1,
  borderRadius: 20,
  backgroundColor: 'white'
},
icon: {
  flex: 1
}
});


export default BottomBarSC;