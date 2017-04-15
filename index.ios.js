/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import {
  AppRegistry
} from 'react-native'
import { app } from './app'
import { Welcome, Home, Balloons, Balloon, Pilots, Pilot } from './app/scenes'
import syncEnchancer from './app/utils/syncEnhancer'
import { Navigation } from 'react-native-navigation';

function registerScreens() {
  Navigation.registerComponent('example.Welcome', () => Welcome)
  Navigation.registerComponent('example.Balloons', () => Balloons)
  Navigation.registerComponent('example.Balloon', () => Balloon)
  Navigation.registerComponent('example.Pilots', () => Pilots)
  Navigation.registerComponent('example.Pilot', () => Pilot)
  Navigation.registerComponent('example.Home', () => Home)

}

registerScreens()
// start the app
syncEnchancer(Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'Home',
      screen: 'example.Home', // this is a registered name for a screen
      icon: require('./images/home_tab_button_ios.png'),
      selectedIcon: require('./images/home_tab_button_ios_filed.png'), // iOS only
      title: 'Home'
    },
    {
      label: 'Balloons',
      screen: 'example.Balloons',
      icon: require('./images/balloons_tab_button_ios.png'),
      selectedIcon: require('./images/balloons_tab_button_ios_filed.png'), // iOS only
      title: 'Balloons'
    }
  ],
  tabsStyle: { // optional, **iOS Only** add this if you want to style the tab bar beyond the defaults
    // tabBarButtonColor: 'black'
  }
}));
