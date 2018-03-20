import React from 'react';
import { View, Text } from 'react-native';
import Style from './styles'

const Message = ({name, content}) => {
  return (
    <View style={Style.message}>
      <Text style={Style.name}>{name}</Text>
      <Text>{content}</Text>
    </View>
  );
}