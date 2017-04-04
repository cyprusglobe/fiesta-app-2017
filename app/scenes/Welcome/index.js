
import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { StartHelper } from '../../components';

import styles from './styles';

class Welcome extends Component {

  render() {

    return (
      <View
        style={styles.welcome}>
        <StartHelper
          containerStyle={styles.welcome}
          imageStyle={styles.welcomeImage}
        />
        <Text
          style={styles.welcomeText}
          >start by adding new profile</Text>
      </View>
    );
  }
}

export default Welcome
