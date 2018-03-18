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
  View,
  YellowBox,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './App/Screen/HomeScreen'
import LogIn from './App/Screen/LogIn';
import MessagesThread from './App/Screen/MessagesThread'
import Profile from './App/Screen/Profile';
import UserInfo from './App/Screen/UserInfo'

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    LogIn: {
      screen: LogIn,
    },
    Register: {
      screen: Register,
    },
    MessagesThreadView: {
      screen: MessagesThread,
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
  constructor(props) {
    super(props)
    YellowBox.ignoreWarnings([
      'Warning: componentWillMount is deprecated',
      'Warning: componentWillReceiveProps is deprecated',
    ]);
  }
  render() {
    return (
      <RootStack />
    );
  }
}