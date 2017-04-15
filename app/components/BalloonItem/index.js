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

class BalloonItem extends Component {
  render() {
    const { balloon, onPressAction, onLongPressAction } = this.props;

    const image_url = `${Constants.IMAGE_URL}/${balloon.reg_num}/300x`;
    return (
      <TouchableOpacity
        style={[styles.itemContainer]}
        onPress={onPressAction}
        onLongPress={onLongPressAction}
      >
        <Image
          source={{ uri: image_url }}
          style={styles.balloonImage}
          resizeMode="contain"
        />
        <View style={[styles.textContainer, { flex: 1 }]}>
          {balloon.competition_balloon
            ? <Icon
                name="md-trophy"
                size={14}
                color="gray"
                style={{ alignSelf: 'flex-end', paddingRight: 10 }}
              />
            : null}
          <Text style={styles.titleText}>{balloon.name}</Text>
          <Text style={styles.subTitleText}>{balloon.reg_num}</Text>
        </View>

      </TouchableOpacity>
    );
  }
}

export default BalloonItem;
