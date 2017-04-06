/**
 * @flow
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import navigatorStyles from './config';

import { InstagramPhotos } from '../../components/';

class Settings extends Component {
  static navigatorStyle = {
    ...navigatorStyles,
  };

  goTo = () => {
    this.props.navigator.push({
      screen: 'example.Home', // unique ID registered with Navigation.registerScreen
      title: 'Home',
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }} />
        <InstagramPhotos style={{ flex: 1 }} profile={'balloonfiesta'} />
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
    paddingTop: 64,
  },
});

export default Settings;
