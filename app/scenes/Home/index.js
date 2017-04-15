/**
 * @flow
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import navigatorStyles from './config';

import styles from './styles';

class Home extends Component {
  static navigatorStyle = {
    ...navigatorStyles,
  };

  goTo = (scene: string, sceneTitle: string) => {
    this.props.navigator.push({
      screen: scene ? scene : 'example.Home', // unique ID registered with Navigation.registerScreen
      title: sceneTitle,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => this.goTo('example.Welcome', 'Welcome')}
        >
          <Text>Go To Welcome Screen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.goTo('example.Instagram', 'Instagram')}
        >
          <Text>Go To Instagram Screen</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.goTo('example.Pilots', 'Pilots')}>
          <Text>Go To Pilots Screen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.goTo('example.Balloons', 'Balloons')}
        >
          <Text>Go To Balloons Screen</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.goTo('example.Search', 'Search')}>
          <Text>Go To Search Screen</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Home;
