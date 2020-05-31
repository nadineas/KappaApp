import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class Form extends Component {
  render() {
    return (
        <View style = {styles.container}>
            <TextInput style = {styles.inputBox} 
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholder='email'
                placeholderTextColor= 'white'
                keyboardType='email-address'
                onSubmitEditing={()=> this.password.focus()}/>
            <TextInput style = {styles.inputBox} 
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholder='password'
                secureTextEntry={true}
                placeholderTextColor= 'white'
                ref={(input) => this.password = input}/>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>{this.props.type}</Text>
            </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputBox: {
    width: 320,
    height: 50,
    backgroundColor: 'rgba(229, 197, 197, 0.3)',
    borderRadius: 10,
    fontSize: 14,
    marginVertical: 10,
    padding: 16
  },
  button: {
    width: 320,
    height: 40,
    backgroundColor: '#ED594F',
    borderRadius: 10,
    marginVertical: 10,
    paddingVertical: 11
  },
  buttonText: {
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
  }
});