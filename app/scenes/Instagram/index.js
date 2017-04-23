/**
 * @flow
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { config } from './config';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { getIconSizePixelRatio, switchIconPerPlatform } from '../../utils';

import { InstagramPhotos } from '../../components/';

class Instagram extends Component {
  constructor(props) {
    super(props);
  }
  static navigatorStyle = {
    ...config.navigatorStyles,
  };

  goTo = () => {
    this.props.navigator.push({
      screen: 'bf.Home', // unique ID registered with Navigation.registerScreen
      title: 'Home',
    });
  };

  componentDidMount() {
    // Ionicons.getImageSource(...switchIconPerPlatform('', 'funnel', 'funnel')).then(filter => {
    //   this.props.navigator.setButtons({
    //     rightButtons: [{ id: 'filter-photos', icon: filter }],
    //   });
    // });
  }

  render() {
    return (
      <View style={styles.container}>
        {/*<View style={{ flex: 1 }} />*/}
        <InstagramPhotos
          style={{ flex: 1 }}
          profile={'balloonfiesta'}
          navigator={this.props.navigator}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: '100%',
    height: '100%',
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DFDFDF',
    paddingTop: 64,
  },
});

export default Instagram;
