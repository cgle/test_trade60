import React, { Component } from "react";
import { View, TextInput, Text } from "react-native";

export default class ViewOrEditFeild extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const { label, property, value, editing, handleChange } = this.props;
        return (
            <View>
                <Text>{label}:</Text>
                { editing ? (
                        <TextInput 
                            value = {value}
                            onChangeText = { (text) => handleChange(text, property)}
                        ></TextInput>
                    )
                    : (
                        <Text>{ value }</Text>
                    )

                }
            </View>    
        );
    }
}