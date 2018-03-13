import React, { Component } from 'react';
import {
  TextInput,
  Text,
  View,
  Button,
  StyleSheet,
  Image,
} from 'react-native';

const styles = StyleSheet.create({
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    width: 300,
    height: 50,
  },
})

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      passwordErrorMessage: '',
      confirmPasswordErrorMessage: '',
    };
  }
  checkConfirmPassword = () => {
    const { password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      this.setState({
        confirmPasswordErrorMessage: '2 passwords must be the same',
      });
    }
    else {
      this.setState({
        confirmPasswordErrorMessage: '',
      });
    }
  }
  checkLengthLargerThan6 = () => {
    const { password } = this.state;
    if (password.length <= 6) {
      this.setState({
        passwordErrorMessage: 'Your password is at least 6 character',
      });
    }
    else {
      this.setState({
        passwordErrorMessage: '',
      });
    }
  }
  checkValidate = () => {
    this.checkConfirmPassword();
    this.checkLengthLargerThan6();
  }
  render() {
    let { passwordErrorMessage, confirmPasswordErrorMessage } = this.state;
    return (
      <View>
        <View>
          <Image 
            source={require('../images/logo.jpg')}
            style ={styles.image}
          />
          <Text style={styles.titleText}>Register</Text>
        </View>
        <View>
          <Text>Email</Text>
          <TextInput
          onChangeText={(email) => this.setState({email})}
          />
        </View>
        <View>
          <Text>Password</Text>
          <TextInput
            secureTextEntry={true}
            onChangeText={(password) => this.setState({password})}
          />
          <Text>{passwordErrorMessage}</Text>
        </View>
        <View>
          <Text>Confirm Password</Text>
          <TextInput
            secureTextEntry={true}
            onChangeText={(confirmPassword) => this.setState({confirmPassword})}
          />
          <Text>{confirmPasswordErrorMessage}</Text>
        </View> 
        <View>
          <Button title="SignUp" onPress={this.checkValidate}/>
        </View>
      </View>
    );
  }
}