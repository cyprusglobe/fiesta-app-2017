/**
 * @flow
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { config } from './config';

import styles from './styles';

class Pilot extends Component {
  static navigatorStyle = {
    ...config.navigatorStyles,
  };

  render() {
    const { pilot } = this.props;

    return (
      <View style={styles.container}>
        <Text>Pilot Detail Scene</Text>
        <Text>{pilot.common_name}</Text>
      </View>
    );
  }
}

export default Pilot;
