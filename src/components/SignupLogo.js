import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class SignupLogo extends Component {
  render() {
    return (
        <View style = {styles.container}>
            <Text style = {styles.kappaTitle}>{'CREATE AN \nACCOUNT'}</Text>
            <Text style = {styles.schoolTitle}>{'FOR PSI CHAPTER UIUC'}</Text>
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
  kappaTitle: {
    textAlign: 'center',
    fontSize: 36,
    color: 'white',
  },
  schoolTitle: {
    fontSize: 16,
    color: 'white',
    marginVertical: 13
  }
});