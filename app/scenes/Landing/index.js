/**
 * @flow
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import navigatorStyles from './config';

class Landing extends Component {
  static navigatorStyle = {
    ...navigatorStyles,
  };

  goTo = () => {
    this.props.navigator.push({
      screen: 'bf.Settings', // unique ID registered with Navigation.registerScreen
      title: 'Settings',
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../../../images/logo.png')}
          resizeMode="contain"
        />
        <TouchableOpacity onPress={() => this.goTo()}>
          <Text>Go To Settings Screen</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: '100%',
    height: '100%',
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DFDFDF',
    paddingTop: 25,
  },
});

export default Landing;
