import React, { Component } from 'react';
import { Text, View, ScrollView, TextInput, Button, StyleSheet } from 'react-native';
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
    let newMessage = { user: {name: 'Me'}, content: this.state.newMessage };                              // Name will replace by user name
    newListMessage.push(newMessage);
    this.setState({ 
      messages: newListMessage,
      newMessage: ''
    });
  }
  render() {
    let { messages, newMessage } = this.state;
    return (
      <View>
        <ScrollView 
          style={styles.messages}
          ref={ref => this.scrollView = ref}
          onContentSizeChange={() => this.scrollView.scrollToEnd({ animated: true })} 
        >
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
        <View>
          <TextInput 
            placeholder="Write a message..."
            onChangeText={this.typingMessage}
            value={newMessage}
          />
          <Button
            title="Send"
            onPress={this.sendMessage}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  messages: {
    height: 400,
  },
})