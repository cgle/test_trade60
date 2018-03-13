import React, { Component } from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';

export default class Homescreen extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text style={styles.welcome}>
                    Welcome to Trade60.com
                </Text>
                <Button
                    title="Log In"
                    onPress={() => navigate('LogIn')}
                />
                <Button
                    title="Register"
                    onPress={() => navigate('Register')}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});