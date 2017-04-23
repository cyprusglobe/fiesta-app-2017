import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

// import Icon from 'react-native-vector-icons/Ionicons';
// import * as Constants from '../../constants';

const PilotItem = ({ pilot, onPressAction, onLongPressAction }) => {
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
};

export default PilotItem;
