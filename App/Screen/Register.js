import React, { Component } from 'react';
import {
  TextInput,
  Text,
  View,
  Button,
  StyleSheet,
  Image,
  YellowBox,
} from 'react-native';

import { emailRegEx } from '../constant'

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
      emailErrorMessage: '',
      passwordErrorMessage: '',
      confirmPasswordErrorMessage: '',
    };
    YellowBox.ignoreWarnings([
      'Warning: componentWillMount is deprecated',
      'Warning: componentWillReceiveProps is deprecated',
    ]);
  }
  checkConfirmPassword = () => {
    const { password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      this.setState({
        confirmPasswordErrorMessage: '2 passwords must be the same',
      });
      return false;
    }
    return true;
  }
  checkPasswordLengthLargerThan6 = () => {
    const { password } = this.state;
    if (password.length <= 6) {
      this.setState({
        passwordErrorMessage: 'Your password is at least 6 character',
      });
      return false;
    }
    return true;
  }
  checkEmail = () => {
    const { email } = this.state;
    console.log(emailRegEx);
    if (!emailRegEx.test(email.trim())) {
      this.setState({
        emailErrorMessage: 'Your email is not valid',
      });
      return false;
    }
    return true;
  }
  checkValidate = () => {
    let check = true;
    const { navigate } = this.props.navigation;
    this.setState({
      emailErrorMessage: '',
      passwordErrorMessage: '',
      confirmPasswordErrorMessage: '',
    })
    check &= this.checkEmail();
    check &= this.checkPasswordLengthLargerThan6();
    check &= this.checkConfirmPassword();
    if (check) {
      navigate('Home');
    }
  }
  render() {
    let { passwordErrorMessage, confirmPasswordErrorMessage, emailErrorMessage } = this.state;
    return (
      <View>
        <View>
          <Image
            source={require('../../images/logo.jpg')}
            style={styles.image}
          />
          <Text style={styles.titleText}>Register</Text>
        </View>
        <View>
          <Text>Email</Text>
          <TextInput
            onChangeText={(email) => this.setState({ email })}
          />
          <Text>{emailErrorMessage}</Text>
        </View>
        <View>
          <Text>Password</Text>
          <TextInput
            secureTextEntry={true}
            onChangeText={(password) => this.setState({ password })}
          />
          <Text>{passwordErrorMessage}</Text>
        </View>
        <View>
          <Text>Confirm Password</Text>
          <TextInput
            secureTextEntry={true}
            onChangeText={(confirmPassword) => this.setState({ confirmPassword })}
          />
          <Text>{confirmPasswordErrorMessage}</Text>
        </View>
        <View>
          <Button title="SignUp" onPress={this.checkValidate} />
        </View>
      </View>
    );
  }
}