import React, { useState } from "react";
import { SearchBar, Card, Icon } from 'react-native-elements';
import { StyleSheet, Text, View, StatusBar, Image, Switch } from 'react-native';
import metrics from '../Themes/Metrics';
import { SafeAreaView } from "react-native-safe-area-context";

const EditSetting = () => {
  const [isEnabled1, setIsEnabled1] = useState(false);
  const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);

  const [isEnabled2, setIsEnabled2] = useState(false);
  const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);

  const [isEnabled3, setIsEnabled3] = useState(false);
  const toggleSwitch3 = () => setIsEnabled3(previousState => !previousState);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search_container}>
        <View style={{ flex: 6 }}>
        </View>
      </View>
      {/* <Image style={styles.avatar} source={require('../assets/avatar.png')}></Image> */}
      <Card containerStyle={styles.card}>

        <Card.Title style={{ textAlign: "left", fontSize: 20 }}>General</Card.Title>
        <View style={{ flexDirection: "col" }}>
          <View style={styles.row}><Text style={styles.textBubble}>Display and sound</Text><Icon name='chevron-right' type="feather"></Icon></View>
          <View style={styles.row}><Text style={styles.textBubble}>Data usage</Text><Icon name='chevron-right' type="feather"></Icon></View>
          <View style={styles.row}><Text style={styles.textBubble}>Accessibility</Text><Icon name='chevron-right' type="feather"></Icon></View>
          <View style={styles.row}><Text style={styles.textBubble}>Preferences</Text><Icon name='chevron-right' type="feather"></Icon></View>
        </View>
      </Card>
      <Card containerStyle={styles.card}>

        <Card.Title style={{ textAlign: "left", fontSize: 20 }}>Security</Card.Title>
        {/* <Card.Divider/> */}
        <View style={{ flexDirection: "col" }}>
          <View style={styles.row}><Text style={styles.textBubble}>Account</Text><Icon name='chevron-right' type="feather"></Icon></View>
          <View style={styles.row}><Text style={styles.textBubble}>Password</Text><Icon name='chevron-right' type="feather"></Icon></View>
          <View style={styles.row}><Text style={styles.textBubble}>Privacy</Text><Icon name='chevron-right' type="feather"></Icon></View>

        </View>
      </Card>
      <Card containerStyle={styles.card}>
        <Card.Title style={{ textAlign: "left", fontSize: 20 }}>Privacy</Card.Title>
        {/* <Card.Divider/> */}
        <View style={{ flexDirection: "col" }}>
          <View style={styles.row}>
            <Text style={styles.textBubble}>Private account</Text>
            <Switch
              trackColor={{ false: "#767577", true: metrics.darkPink }}
              thumbColor={"#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch1}
              value={isEnabled1}
            />
          </View>
          <View style={styles.row}>
            <Text style={styles.textBubble}>Location</Text>
            <Switch
              trackColor={{ false: "#767577", true: metrics.darkPink}}
              thumbColor={"#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch2}
              value={isEnabled2}
            /></View>
          <View style={styles.row}>
            <Text style={styles.textBubble}>Permission to tag</Text>
            <Switch
              trackColor={{ false: "#767577", true: metrics.darkPink }}
              thumbColor={ "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch3}
              value={isEnabled3}
            /></View>

        </View>
      </Card>
    </SafeAreaView>
  );

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


export default EditSetting;