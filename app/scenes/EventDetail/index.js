import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import styles from './styles';
import { config } from './config';

class EventDetail extends Component {
  static navigatorStyle = {
    ...config.navigatorStyles,
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Fuck</Text>
      </View>
    );
  }
}

export default EventDetail;
