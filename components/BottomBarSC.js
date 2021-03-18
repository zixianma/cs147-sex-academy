import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TextInput, Pressable} from 'react-native';
import { Icon, BottomSheet, Divider, Button} from 'react-native-elements';
import BackButton from './BackButton';
import BottomButton from './BottomButton';
import Metrics from '../Themes/Metrics';

const BottomBarSC = () => {
  const [text, onChangeText] = React.useState(null);
  const [liked, onPressLike] = React.useState(false);
  const [starred, onPressStar] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(false);

  const list = [
    { title: 'Share to',
    containerStyle: { backgroundColor: 'black', textAlign: 'center' },
    titleStyle: { color: 'white'},
    contentStyle: { textAlign: 'center'}
    },
    { title: 'List Item 2' },
    {
      title: 'Cancel',
      containerStyle: { backgroundColor: 'black', textAlign: 'center'},
      titleStyle: { color: 'white'},
      contentStyle: { textAlign: 'center'},
      onPress: () => setIsVisible(false),
    },
  ];

  return (

    <View style={styles.header}>
<View style={{flex: 2, flexDirection: 'row', alignItems:"center"}}> 
<TextInput
      style={styles.input}
      onChangeText={onChangeText}
      value={text}
      placeholder="comment"
      keyboardType="default"
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
            <Pressable onPress={() => setIsVisible(true)}>
           <Image source={require('../assets/share.png')}/>
          
            </Pressable>
                  </View>
                  <BottomSheet
                    isVisible={isVisible}
                    containerStyle={{ backgroundColor: 'rgba(0.5, 0.25, 0, 0.2)', borderRadius: 10 }}
                  >
                    <View>
                      <View style={styles.share_view}>
                    
                    <Text style={{fontSize: 20, textAlign: 'center', marginVertical: 20, fontWeight: "bold"}}>Share to</Text>
                    <Divider style={{height: 3, color: 'black'}} />
                    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                      <Pressable style={styles.social_icon}><Image source={require('../assets/Message.png')}></Image></Pressable>
                      <Pressable style={styles.social_icon}><Image source={require('../assets/Mesenger.png')}></Image></Pressable>
                      <Pressable style={styles.social_icon}><Image source={require('../assets/Twitter.png')}></Image></Pressable>
                      <Pressable style={styles.social_icon}><Image source={require('../assets/Whatsapp.png')}></Image></Pressable>
                    </View>
                    </View>
                    <View style={{backgroundColor: "black"}}>
                      <Pressable style={styles.share_btn} onPress={() => setIsVisible(false)}><View ><Text style={{color: 'white', textAlign: "center", fontSize: 20, fontWeight: 'bold'}}>Cancel</Text></View></Pressable>
                    {/* <Button titleStyles={styles.sharebtn} color="white" onPress={() => setIsVisible(false)} title="Cancel" ><Text>Cancel</Text></Button> */}
                    </View>
                    </View>
                    
                  </BottomSheet>
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
    paddingRight: 20, 
    marginHorizontal: 0
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
},
share_view: {
  backgroundColor: '#EEEFF4', 
  height: 0.25 * Metrics.screenHeight,
  borderTopLeftRadius: 15,
  borderTopRightRadius: 15,
  borderWidth: 3,
  borderColor: 'black'
},
share_btn: {
  backgroundColor: 'black',
  fontSize: 20,
  color: 'white',
  margin: 20,
},
social_icon:{
  flex: 1,
  marginTop: 35, 
  marginHorizontal: 20
}
});


export default BottomBarSC;