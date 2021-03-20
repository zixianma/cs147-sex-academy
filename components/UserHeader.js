import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TextInput, Pressable, StatusBar} from 'react-native';
import { Icon, BottomSheet, Divider, Button} from 'react-native-elements';
import BackButton from './BackButton';
import BottomButton from './BottomButton';
import Metrics from '../Themes/Metrics';

export default function UserHeader (props){
  const [text, onChangeText] = React.useState(null);
  const [liked, onPressLike] = React.useState(false);
  const [starred, onPressStar] = React.useState(false);
  console.log("User header:", props);
  return (
      <View >
<View>
                      <View style={styles.user_view}>
                    
                    {/* <BackButton /> */}
                    <View style={{flexDirection: 'row'}}>
                    <Image style={styles.user_pic} source={require('../assets/avatar.png')} />
                    <View>
                        <Text style={styles.user_num}>
                        Katrisa Feona 
                        </Text>
                        <Text style={styles.user_text}>
                        @katiness
                        </Text>
                        <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
                        <Pressable style={styles.share_btn} onPress={()=>{
        props.props.navigation.navigate('EditProfile');}}>
                          <View >
                            <Text style={{color: 'white', textAlign: "center", fontSize: 16, fontWeight: 'bold'}}>Edit profile
                            </Text>
                            </View>
                            </Pressable>
                        <Pressable onPress={()=>{
        props.props.navigation.navigate('EditSetting');}}>
                        <Icon name='settings' reverse type='feather' color={Metrics.lightPink}/>
                        </Pressable>
                        </View>
                    </View>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                    <Text style={styles.user_num}>276</Text>
                        <Text style={styles.user_num}>62k</Text>
                        <Text style={styles.user_num}>123</Text>
                    </View>

                    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                        <Text style={styles.user_text}>Stories</Text>
                        <Text style={styles.user_text}>Followers</Text>
                        <Text style={styles.user_text}>Following</Text>
                        </View>
                    </View>
                    {/* <View style={{backgroundColor: "black"}}>
                      <Pressable style={styles.share_btn}><View ><Text style={{color: 'white', textAlign: "center", fontSize: 20, fontWeight: 'bold'}}>Cancel</Text></View></Pressable>
                   
                    </View> */}
                    </View>
              </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        marginHorizontal: 16
      },
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
},
user_view: {
  backgroundColor: Metrics.pink, 
  height: 0.30 * Metrics.screenHeight,
  borderBottomLeftRadius: 35,
  borderBottomRightRadius: 35,
  paddingTop: 30
},
share_btn: {
  backgroundColor: Metrics.lightPink,
  color: 'white',
  padding: 15,
  marginVertical: 10,
  marginRight: 10,
  borderRadius: 20
},
social_icon:{
  flex: 1,
  marginTop: 35, 
  marginHorizontal: 20
},
user_text: {
    fontSize: 16,
    color: 'white'
},
user_num: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 20
},
user_pic: {
    width: 100,
    height: 100,
    marginHorizontal: 30,
    marginVertical: 20
}
});


