/**
 * @flow
 */

import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native'
import codePush from 'react-native-code-push'
import Icon from 'react-native-vector-icons/Ionicons'
import { StackNavigator } from 'react-navigation'

import syncEnchancer from './utils/syncEnhancer'
import { Home, Settings } from './scenes'

import { Navigation } from 'react-native-navigation';

function registerScreens() {
  Navigation.registerComponent('example.Home', () => Home)
  Navigation.registerComponent('example.Settings', () => Settings)
}

registerScreens()
// start the app
syncEnchancer(Navigation.startSingleScreenApp({
  screen: {
    screen: 'example.Home', // unique ID registered with Navigation.registerScreen
    // title: 'Home', // title of the screen as appears in the nav bar (optional)
    navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
    navigatorButtons: {} // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
  },
}));
