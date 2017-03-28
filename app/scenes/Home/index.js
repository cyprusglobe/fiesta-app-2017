/**
 * @flow
 */

import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native'
import navigatorStyles from './config'

class Home extends Component {

  static navigatorStyle = {
    ...navigatorStyles
  };

  goTo = (scene, sceneTitle) => {
    this.props.navigator.push({
      screen: scene ? scene : 'example.Home', // unique ID registered with Navigation.registerScreen
      title: sceneTitle
    });
  }

  render() {


    return (
      <View style={styles.container}>
        <Image source={require('../../../images/logo.png')} resizeMode="contain" />
        <TouchableOpacity onPress={() => this.goTo('example.Settings', 'Settings')}>
          <Text>Go To Settings Screen</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.goTo('example.Search', 'Search')}>
          <Text>Go To Search Screen</Text>
        </TouchableOpacity>
      </View>
    )
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
    paddingTop: 25
  }
})

export default Home
