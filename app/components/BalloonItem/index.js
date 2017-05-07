/**
 * @flow
 */

import React from 'react';
import { View, Text, Image, TouchableNativeFeedback } from 'react-native';
import * as Constants from '../../constants';
import { theme } from '../../theme';

import styles from './styles';

// import Icon from 'react-native-vector-icons/Ionicons';
// import * as Constants from '../../constants';

const BalloonItem = ({ balloon, onPressAction, onLongPressAction }) => {
  const image_url = `${Constants.IMAGE_URL}/${balloon.reg_num}/200x`;

  return (
    <TouchableNativeFeedback
      background={TouchableNativeFeedback.Ripple(theme.app.baseBlue, true)}
      useForeground
      onPress={onPressAction}
      onPress={onPressAction}
      onLongPress={onLongPressAction}
    >
      <View style={[styles.itemContainer]}>

        <View style={{ flex: 0.2 }}>
          <Image
            key={balloon.reg_num}
            source={{ uri: image_url }}
            style={styles.balloonImage}
            resizeMode="contain"
          />

        </View>

        <View style={[styles.textContainer, { flex: 0.8 }]}>
          <Text style={[styles.titleText]}>{balloon.balloon_name}</Text>
          <Text style={[styles.subTitleText]}>{balloon.reg_num}</Text>
        </View>

        <Text
          style={[
            styles.subTitleText,
            { alignSelf: 'flex-end', paddingRight: 5 },
          ]}
        >
          Balloon
        </Text>
      </View>
    </TouchableNativeFeedback>
  );
};

export default BalloonItem;
