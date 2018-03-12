import React, { Component } from 'react';
import {
  TextInput,
  Text,
  View,
  Button,
} from 'react-native';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      passwordErrorMessage: '',
    };
  }
  checkConfirmPassword = () => {
    let { password, confirmPassword } = this.state;
    if (password != confirmPassword) {
      this.setState({
        passwordErrorMessage: '2 passwords must be the same',
      })
    }
  }
  checkLengthLargerThan6 = () => {
    let { password } = this.state;
    if (password.length() <= 6) {
      this.setState({
        passwordErrorMessage: 'Your password is at least 6 character',
      })
    }
  }
  checkValidate = () => {
    this.checkConfirmPassword();
    this.checkLengthLargerThan6();
  }
  render() {
    <View>
      <View>
        <Text>Email</Text>
        <TextInput
        onChange={(email) => this.setState({email})}
        />
      </View>
      <View>
        <Text>Password</Text>
        <TextInput
        type = "password"
        onChange={(password) => this.setState({password})}
        />
      </View>
      <View>
        <Text>Confirm Password</Text>
        <TextInput
        type = "password"
        onChange={(confirmPassword) => this.setState({confirmPassword})}
        />
        { passwordErrorMessage &&  <Text>{passwordErrorMessage}</Text>}
      </View>
      <Button onPress={this.checkValidate}>Sign Up</Button>
    </View>
  }
}