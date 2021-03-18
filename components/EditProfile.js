import React, { Component } from "react";
import { SearchBar, Card, Icon } from 'react-native-elements';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import metrics from '../Themes/Metrics';
import { SafeAreaView } from "react-native-safe-area-context";

class EditProfile extends Component {

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.search_container}>
          <View style={{ flex: 6 }}>
          </View>
        </View>
        <Image style={styles.avatar} source={require('../assets/avatar.png')}></Image>
        <Card containerStyle={styles.card}>

          <Card.Title style={{ textAlign: "left", fontSize: 20 }}>General Info</Card.Title>
          <View style={{ flexDirection: "col" }}>
          <View style={styles.row}><Text style={styles.textBubble}>Name</Text><Icon name='chevron-right' type="feather"></Icon></View>
          <View style={styles.row}><Text style={styles.textBubble}>Gender</Text><Icon name='chevron-right' type="feather"></Icon></View>
          <View style={styles.row}><Text style={styles.textBubble}>Age</Text><Icon name='chevron-right' type="feather"></Icon></View>
          <View style={styles.row}><Text style={styles.textBubble}>Bio</Text><Icon name='chevron-right' type="feather"></Icon></View>
          </View>
        </Card>
        <Card containerStyle={styles.card}>

          <Card.Title style={{ textAlign: "left", fontSize: 20 }}>More info</Card.Title>
          {/* <Card.Divider/> */}
          <View style={{ flexDirection: "col" }}>
          <View style={styles.row}><Text style={styles.textBubble}>Education</Text><Icon name='chevron-right' type="feather"></Icon></View>
          <View style={styles.row}><Text style={styles.textBubble}>Location</Text><Icon name='chevron-right' type="feather"></Icon></View>
          <View style={styles.row}><Text style={styles.textBubble}>Interested topics</Text><Icon name='chevron-right' type="feather"></Icon></View>
          <View style={styles.row}><Text style={styles.textBubble}>QR code</Text><Icon name='chevron-right' type="feather"></Icon></View>
          </View>
        </Card>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
    width: metrics.screenWidth
  },
  search_container: {
    alignSelf: 'stretch',
    height: 60,
    flexDirection: 'row', // row
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between', // center, space-around
    paddingLeft: 20,
    paddingRight: 20
  },
  search: {
    width: 200,
    flex: 5,
    borderColor: 'grey',
    borderWidth: 2,
    borderRadius: 10,
    paddingLeft: 10
  },
  textBubble: {
    padding: 10,
    margin: 5,
    fontSize: 16,
    fontWeight: "bold"
  },
  avatar: {
    width: 100,
    height: 100,
    alignSelf: "center"
  },
  card: { 
    borderWidth: 2, 
    borderColor: 'black', 
    borderRadius: 10, 
    backgroundColor: "#FFF3F8",
    marginRight: 45
   },
   row: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center'
   }
});


export default EditProfile;