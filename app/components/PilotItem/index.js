import React, { Component, PureComponent } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import { CornerLabel } from '../';

import styles from './styles';

import * as Constants from '../../constants';

class PilotItem extends Component {
  render() {
    const { pilot, onPressAction, onLongPressAction } = this.props;

    // const image_url = `${Constants.IMAGE_URL}/${balloon.reg_num}/300x`;

    return (
      <TouchableOpacity
        style={[styles.itemContainer]}
        onPress={onPressAction}
        onLongPress={onLongPressAction}
      >
        <View style={[styles.textContainer, { flex: 1 }]}>
          <Text style={styles.titleText}>{pilot.first_name}</Text>
          <Text style={styles.subTitleText}>{pilot.last_name}</Text>
        </View>

      </TouchableOpacity>
    );
  }
}

export default PilotItem;
