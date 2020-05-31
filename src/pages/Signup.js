import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

import SignupLogo from '../components/SignupLogo';
import Form from '../components/Form';

import { Actions } from 'react-native-router-flux';

export default class Signup extends Component {
  goBack() {
      Actions.pop();
  }
  render() {
    return (
        <View style = {styles.container}>
            <SignupLogo/>
            <Form type="Signup"/>
            <View style = {styles.signupTextCont}>
              <Text style={styles.signupText}>Already have an account?</Text>
              <TouchableOpacity onPress={this.goBack}>
                <Text style={styles.signupText}> Sign in</Text>
              </TouchableOpacity>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EA726A',
    alignItems: 'center',
    justifyContent: 'center'
  },
  signupTextCont: {
    flexGrow: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  signupText: {
    fontSize: 12,
    textAlign: 'center',
    color: 'white',
  },
  signupButton: {
    fontSize: 12,
    textAlign: 'center',
    color: 'white',
    fontWeight: '600'
  }
});