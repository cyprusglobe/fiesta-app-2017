import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import * as Constants from '../../constants';

const BalloonItem = ({ balloon, onPressAction, onLongPressAction }) => {
  const image_url = `${Constants.IMAGE_URL}/${balloon.reg_num}/200x`;
  return (
    <TouchableOpacity
      style={[styles.itemContainer]}
      onPress={onPressAction}
      onLongPress={onLongPressAction}
    >
      <Image
        key={balloon.reg_num}
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
};

export default BalloonItem;
