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

    return (
      <View style={styles.container}>
        <Text>Pilot Scene</Text>
        {isPreview
          ? null
          : <View style={{ height: 85, width: '100%' }}>
              <BalloonItem
                balloon={pilot.balloon}
                onPressAction={() =>
                  this.props.navigator.push({
                    screen: 'bf.Balloon',
                    passProps: { pilot: pilot, balloon: pilot.balloon },
                  })}
              />
            </View>}

      </View>
    );
  }
}

// Pilot.navigationOptions = props => {
//   const { navigation } = props;
//   const { state, setParams, navigate } = navigation;
//   const { params } = state;

//   return {
//     headerTitle: params.pilot.common_name,
//   };
// };

export default Pilot;
