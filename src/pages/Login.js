import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';

import {Actions} from 'react-native-router-flux';

export default class Login extends Component {
  signup() {
    Actions.signup()
  }
  render() {
    return (
        <View style = {styles.container}>
            <Logo/>
            <Form type="Login"/>
            <View style = {styles.signupTextCont}>
              <Text style={styles.signupText}>Don't have an account?</Text>
              <TouchableOpacity onPress={this.signup}>
                <Text style={styles.signupButton}> Signup</Text>
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