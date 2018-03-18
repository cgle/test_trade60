import React, { Component } from "react";
import { Text, TextInput, Button, StyleSheet, ScrollView, View, Image, YellowBox } from 'react-native';
import ViewOrEditFeild from "../components/ViewOrEditFeild";

import user from '../../user.json';
export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      userdata: user.result,
    }
  }
  handleChange = (value, property) => {
    return false;
    // const data = this.state.userdata;
    // var newData = {};
    // Object.keys(data).forEach((key) => newData[key] = data[key]);
    // newData[property] = value;
    // this.setState({
    //   userdata: newData,
    // })
  }
  render() {
    const { userdata } = this.state;
    const labelAndProperty = [
      { label: 'Name', property: 'name' },
      { label: 'Email', property: 'email' },
      { label: 'Website', property: 'website' },
      { label: 'Location', property: 'location' },
      { label: 'Interest', property: 'interest' },
      { label: 'Description', property: 'description' },
      { label: 'Company name', property: 'company_name' },
    ];
    const { editing } = this.state;
    return (
      <ScrollView>
        <View>
          <Image
            style={styles.logo}
            source={require('../../images/logo.jpg')}
          />
          <Text
            style={styles.title}
          >
            Profile
          </Text>
        </View>
        <View style={styles.container}>
          {labelAndProperty.map((info, i) => (
            <ViewOrEditFeild
              key={i}
              editing={editing}
              label={info.label}
              property={info.property}
              value={userdata[info.property]}
              handleChange={this.handleChange}
            />
          ))}
        </View>
        <View>
          <Button
            title={editing ? 'Save' : 'Edit'}
            onPress={() => {
              this.setState({
                editing: !editing
              })
            }}
          />
        </View>
      </ScrollView>
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
})

