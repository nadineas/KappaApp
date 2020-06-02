import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

export default class Logo extends Component {
  render() {
    return (
        <View style = {styles.container}>
            <Image style = {styles.kappaLogo} source={require("../images/KplLogo.png")}/>
            <Text style = {styles.schoolTitle}>{'PSI CHAPTER UIUC'}</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  kappaLogo: {
    width: 250,
    height: 100
  },
  schoolTitle: {
    fontSize: 16,
    color: 'white',
    marginVertical: 13
  }
});