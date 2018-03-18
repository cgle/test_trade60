/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './App/Screen/HomeScreen'
import LogIn from './App/Screen/LogIn';
import Register from './App/Screen/Register';
import Profile from './App/Screen/Profile';

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    LogIn: {
      screen: LogIn
    },
    Register: {
      screen: Register
    },
    Profile: {
      screen: Profile
    },
  },
  {
    initialRouteName: 'Home',
  }
);

const instructions = Platform.select({
  ios: 'HALLO!!!!',
  android: 'HALLO!!!!'
});

export default class App extends Component {
  render() {
    return (
      <RootStack />
    );
  }
}