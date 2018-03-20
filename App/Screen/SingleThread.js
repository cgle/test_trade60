import React, { Component } from 'react';
import { Text, View, ScrollView, TextInput, Button } from 'react-native';
import Message from '../Components/Message/Message';

export default class SingleThread extends Component {
  constructor(props) {
    super(props);
    const threadId = this.props.navigation.state.params.threadId;
    const PATH = '../../thread_' + threadId + '.json';
    const data = require('../../thread_3.json');
    this.state = {
      messages: data.result,
      newMessage: ''
    };
  }
  typingMessage = (newMessage) => {
    this.setState({ newMessage });
  }
  sendMessage = () => {
    const { messages } = this.state;
    let newListMessage = messages.map(message => {
      let copyMessage = {};
      for (let key in message) {
        copyMessage[key] = message[key];
      }
      return copyMessage;
    });
    let newMessage = { name: 'Me', content: this.props.newMessage };                              // Name will replace by user name
    newListMessage.push(newMessage);
    this.setState({ messages: newListMessage });
  }
  render() {
    let { messages } = this.state;
    return (
      <View>
        <ScrollView>
          {
            messages.map((message, index) => {
              return (
                <Message
                  key={index}
                  name={message.user.name}
                  content={message.content}
                />
              );
            })
          }
        </ScrollView>
        <TextInput
          placeholder="Write a message..."
          onChangeText={this.typingMessage}
        />
        <Button
          title="Send"
          onPress={this.sendMessage}
        />
      </View>
    );
  }
}