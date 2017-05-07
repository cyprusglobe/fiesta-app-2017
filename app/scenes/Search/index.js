/**
 * @flow
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { config } from './config';

class Search extends Component {
  static navigatorStyle = {
    ...config.navigatorStyles,
  };

  constructor(props) {
    super(props);

    this.props.navigator.setButtons({
      ...config.navigatorButtons,
    });

    this.props.navigator.setTitle({
      title: 'Search',
    });
  }

  goTo = (scene: string) => {
    this.props.navigator.push({
      screen: scene ? scene : 'bf.Home', // unique ID registered with Navigation.registerScreen
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
    backgroundColor: '#f0eef0',
    paddingTop: 25,
  },
});

export default Search;
