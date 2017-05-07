import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableNativeFeedback,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import { theme } from '../../theme';

import * as Constants from '../../constants';

const EventItem = ({ event, onPressAction }) => {
  return (
    <TouchableNativeFeedback
      background={TouchableNativeFeedback.Ripple(theme.app.baseRed, true)}
      useForeground
      onPress={onPressAction}
    >
      <View style={{ backgroundColor: 'white', height: 75 }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            borderBottomColor: 'darkgray',
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        >
          <View
            style={{
              backgroundColor: '#F5F5F5',
              width: '25%',
              alignItems: 'center',
              paddingTop: 5,
            }}
          >
            <Text style={{ color: 'black', opacity: 0.4, fontWeight: '400' }}>
              {event.time}
            </Text>
            {event.till
              ? <Text style={{ color: 'darkgray', fontSize: 12 }}>
                  to {event.till}
                </Text>
              : null}

          </View>
          <View
            style={{ paddingLeft: 10, paddingTop: 10, flexGrow: 1, width: 0 }}
          >
            <Text style={[{ color: 'black' }]}>{event.name}</Text>
          </View>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};

export default EventItem;
