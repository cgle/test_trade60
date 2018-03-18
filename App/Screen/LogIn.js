import React, { Component } from 'react';
import { TextInput, View, Text, Button, Image, StyleSheet, YellowBox } from 'react-native';

export default class LogIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        YellowBox.ignoreWarnings([
            'Warning: componentWillMount is deprecated',
            'Warning: componentWillReceiveProps is deprecated',
        ]);
    }
    login = () => {
        const { navigate } = this.props.navigation;
        alert('Log in successfully');
        navigate('Profile');
    }
    render() {
        const { emailError, passwordError } = this.state;
        const { navigate } = this.props.navigation;
        return (
            <View>
                <View>
                    <Image
                        style={styles.logo}
                        source={require('../../images/logo.jpg')}
                    />
                    <Text
                        style={styles.title}
                    >
                        LOG IN
                    </Text>
                </View>
                <View>
                    <View>
                        <TextInput
                            style={styles.textInput}
                            placeholder="email"
                            keyboardType="email-address"
                            onChangeText={(email) => this.setState({ email })}
                        />
                        {emailError &&
                            <Text>{emailError}</Text>
                        }
                    </View>
                    <View>
                        <TextInput
                            style={styles.textInput}
                            placeholder="password"
                            secureTextEntry={true}
                            onChangeText={(password) => this.setState({ password })}
                        />
                        {passwordError &&
                            <Text>{passwordError}</Text>
                        }
                    </View>
                </View>
                <View>
                    <Button
                        title="Log in"
                        onPress={() => { this.login() }}
                    />
                    <Text
                        style={styles.link}
                        onPress={() => navigate('Register')}
                    >
                        Create an account
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    logo: {
        width: 200,
        height: 50
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 30
    },
    textInput: {
        fontSize: 20
    },
    link: {
        textAlign: 'center',
        textDecorationLine: 'underline',
        color: 'rgb(33,150,243)',
        fontSize: 20
    }
})