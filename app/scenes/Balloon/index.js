/**
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import { config } from './config';

import { theme } from '../../theme';
import * as Constants from '../../constants';

import styles from './styles';

class Balloon extends Component {
  static navigatorStyle = {
    ...config.navigatorStyles,
  };

  renderIcon = (condition: any, icon: string, size: number, style: Object) => {
    if (condition) {
      return <Icon name={icon} size={size} color="gray" style={{ ...style }} />;
    }
    return null;
  };

  render() {
    const { balloon } = this.props;
    const image_url = `${Constants.IMAGE_URL}/${balloon.reg_num}/x800`;

    return (
      <View style={styles.container}>
        <ScrollView style={{ flex: 1 }}>
          <Image
            source={{ uri: image_url }}
            style={{ height: 400, width: Dimensions.get('window').width }}
            resizeMode="cover"
          />
          <View
            style={{
              height: 44,
              backgroundColor: theme.app.baseBlue,
              elevation: 5,
              marginTop: 0,
              marginBottom: 8,
              paddingLeft: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Text style={{ color: 'white' }}>{balloon.reg_num}</Text>
            {this.renderIcon(balloon.competition_balloon, 'md-trophy', 22, {
              color: 'white',
              paddingRight: 10,
            })}
          </View>
          <View>
            <Text>Item 1</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Balloon;
