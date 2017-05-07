import React from 'react';
import { View, Text, Image, TouchableNativeFeedback } from 'react-native';

import { theme } from '../../theme';

import styles from './styles';

// import Icon from 'react-native-vector-icons/Ionicons';
// import * as Constants from '../../constants';

const camelize = str => {
  return str.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

const PilotItem = ({ pilot, onPressAction, onLongPressAction }) => {
  return (
    <TouchableNativeFeedback
      background={TouchableNativeFeedback.Ripple(theme.app.baseBlue, true)}
      useForeground
      onPress={onPressAction}
      onPress={onPressAction}
      onLongPress={onLongPressAction}
    >
      <View style={[styles.itemContainer]}>
        <View style={[styles.textContainer, { flex: 1 }]}>
          <Text style={[styles.titleText]}>{camelize(pilot.common_name)}</Text>
        </View>
        <Text
          style={[
            styles.subTitleText,
            { alignSelf: 'flex-end', paddingRight: 5 },
          ]}
        >
          Pilot
        </Text>
      </View>
    </TouchableNativeFeedback>
  );
};

export default PilotItem;
