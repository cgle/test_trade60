import React, { Component } from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';
import { LOGIN_PAGE, REGISTER_PAGE, MESSAGES_THREAD_VIEW_PAGE, PROFILE_PAGE } from '../constant'

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
                    onPress={() => navigate(LOGIN_PAGE)}
                />
                <Button
                    title="Register"
                    onPress={() => navigate(REGISTER_PAGE)}
                />
                <Button
                    title="MessagesThread"
                    onPress={() => navigate(MESSAGES_THREAD_VIEW_PAGE)}
                />
                <Button
                    title="User profile"
                    onPress={() => navigate(PROFILE_PAGE)}
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