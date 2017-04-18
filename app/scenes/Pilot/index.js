/**
 * @flow
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { config } from './config';

import { BalloonItem } from '../../components';

import styles from './styles';

class Pilot extends Component {
  static navigatorStyle = {
    ...config.navigatorStyles,
  };

  render() {
    const { pilot, isPreview } = this.props;
    const isLoading = true;

    console.log(pilot)
    return (
      <View style={styles.container}>
        <Text>Pilot Scene</Text>

        {isLoading
          ? <View><Text>Loading...</Text></View>
          : <Text>Pilot Detail Scene</Text>}
        <View style={{ height: 85, width: '100%' }}>
          <BalloonItem balloon={pilot.balloon} />
        </View>
      </View>
    );
  }
}

export default Pilot;
