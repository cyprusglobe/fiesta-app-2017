import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Image, Platform } from 'react-native';

import { theme } from '../../theme';

import styles from './styles';

import Icon from 'react-native-vector-icons/Ionicons';

export default class InstagramPhotoModal extends Component {
  static navigatorStyle = {
    drawUnderNavBar: Platform.OS === 'android' ? false : true,
    navBarTransparent: true,
    navBarTranslucent: true,
    navBarButtonColor: Platform.OS === 'android' ? 'white' : 'black',
    navBarTextColor: 'black',
    backButtonHidden: false,
  };

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this._onNavigatorEvent.bind(this));
  }

  _onNavigatorEvent(event) {
    console.log(event.type);
    if (event.type === 'NavBarButtonPress') {
      if (event.id === 'close-modal-instagram') {
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
