import React, { Component } from 'react';
import Thread from '../Components/Thread/Thread';
import data from '../../threads.json'
import { View, ScrollView, TextInput, Button, StyleSheet } from 'react-native'
import { PROFILE_PAGE } from '../constant'

export default class MessagesThread extends Component {
  state = { 
    threads: data.result,
  }
  onPressThread = (value) => {
    const { navigate } = this.props.navigation;
    navigate('SingleThread', {threadId: value})
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
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Button
          title="User Info"
          onPress={() => navigate(PROFILE_PAGE)}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})