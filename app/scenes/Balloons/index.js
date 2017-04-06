import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import navigatorStyles from './config';
import styles from './styles';

export default class Balloons extends Component {
  static navigatorStyle = {
    ...navigatorStyles,
  };

  render() {
    return (
      <View style={styles.welcome}>
        <Text>Balloons Scene</Text>
      </View>
    );
  }
}
