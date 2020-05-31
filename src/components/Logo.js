import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class Logo extends Component {
  render() {
    return (
        <View style = {styles.container}>
            <Text style = {styles.kappaTitle}>{'KAPPA PHI \nLAMBDA'}</Text>
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