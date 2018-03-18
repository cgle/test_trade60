import React from 'react';
import { TouchableHighlight, View, Text } from 'react-native'
import Style from './styles'

const Thread = ({ description, id, is_active, name, num_unread_msgs, thread_type, onPress }) => {
  return (
    <TouchableHighlight
      onPress={() => onPress(id)}
      underlayColor = "grey"
      style={Style.thread}
    >
      <View>
        <Text style={Style.title}>Name: {name}</Text>
        <Text>Unread messages: {num_unread_msgs}</Text>
        <Text>Active: {is_active ? "yes" : "no"}</Text>
        <Text>Description: {description}</Text>
      </View>
    </TouchableHighlight>
  );
}

export default Thread;