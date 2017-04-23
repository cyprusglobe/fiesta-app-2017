import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';

import { theme } from '../../theme';
import { iconsMap, iconsLoaded } from '../../utils/appIcons';

import styles from './styles';

import Icon from 'react-native-vector-icons/Ionicons';

export default class InstagramPhotoModal extends Component {
  static navigatorStyle = {
    drawUnderNavBar: false,
    navBarTransparent: true,
    navBarTranslucent: true,
  };

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this._onNavigatorEvent.bind(this));
  }

  _onNavigatorEvent(event) {
    console.log(event);
    if (event.type === 'NavBarButtonPress') {
      if (event.id === 'cancel') {
        this.props.navigator.dismissModal({ animationType: 'slide-up' });
      }
    }
  }

  render() {
    const { imageUrl, navigator } = this.props;
    return (
      <View
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.9)',
        }}
      >
        <Image
          style={{ width: '100%', height: '100%' }}
          source={{ uri: imageUrl }}
          resizeMode="contain"
        />
      </View>
    );
  }
}
