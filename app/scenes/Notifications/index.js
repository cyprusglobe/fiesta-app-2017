/**
 * @flow
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { config } from './config';

import styles from './styles';

class Notifications extends Component {
  static navigatorStyle = {
    ...config.navigatorStyles,
  };

  render() {
    const { pilot } = this.props;

    return (
      <View style={styles.container}>
        <Text>Notifications Scene</Text>
      </View>
    );
  }
}

export default Notifications;
