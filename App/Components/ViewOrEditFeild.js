import React, { Component } from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";

export default class ViewOrEditFeild extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const { label, property, value, editing, handleChange } = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.label}>{label}:</Text>
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

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginBottom: 10,
    },
    label: {
        fontSize: 15,
        fontWeight: 'bold',
    }
})