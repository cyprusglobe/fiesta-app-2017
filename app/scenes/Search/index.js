/**
 * @flow
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import navigatorStyles from './config';

class Search extends Component {
  static navigatorStyle = {
    ...navigatorStyles,
  };

  goTo = scene => {
    this.props.navigator.push({
      screen: scene ? scene : 'example.Home', // unique ID registered with Navigation.registerScreen
      title: 'Home',
    });
  };

  render() {
    const { scene } = this.props;

    return <View style={styles.container} />;
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

export default Search;
