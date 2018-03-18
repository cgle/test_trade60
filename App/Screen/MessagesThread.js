import React, { Component } from 'react';
import Thread from '../components/Thread/Thread'
import data from '../../threads.json'
import { View, ScrollView, TextInput, Button } from 'react-native'
import { USER_INFO_PAGE } from '../constant'

export default class MessagesThread extends Component {
  state = { 
    threads: data.result,
  }
  onPressThread = (value) => {
    alert(value);
  }
  onChangeText = (value) => {
    if (value == "") {
      this.setState({
        threads: data.result,
      });
      return;
    }
    let threadsMatched = data.result.filter(thread => {
      for (let key in thread) {
        if (typeof thread[key] == 'string' && thread[key].toLowerCase().search(value.toLowerCase()) != -1) {
          return thread;
        }
      }
    });
    this.setState({
      threads: threadsMatched,
    });
  }
  render() {
    let { threads } = this.state;
    return (
      <View>
        <Button
          title="User Info"
          onPress={() => navigator(USER_INFO_PAGE)}
        />
        <TextInput
          placeholder="search"
          onChangeText={this.onChangeText}
        />
        <ScrollView>
        {
          threads.map((element, index) => {
            return (
              <Thread
              {...element}
              onPress={this.onPressThread}
              key = { element.id }
              />
            );
          })
        }
        </ScrollView>
      </View>
    );
  }
}