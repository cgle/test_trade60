import React, { Component } from 'react';
import { TextInput, View, Text, Button, Image } from 'react-native';

export default class LogIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    login = () => {
        alert('Log in successfully')
    }
    render() {
        const { emailError, passwordError } = this.state;
        const { navigate } = this.props.navigation;
        return (
            <View>
                <View>
                    <Image
                        style={{ width: 200, height: 50 }}
                        source={require('../../images/logo.jpg')}
                    />
                    <Text>
                        LOG IN
                    </Text>
                </View>
                <View>
                    <View>
                        <TextInput
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
                        onPress = {() => navigate('Register')}
                    >
                        Create an account
                    </Text>
                </View>
            </View>
        );
    }
}