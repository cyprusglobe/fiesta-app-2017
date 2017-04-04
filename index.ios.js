/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import {
  AppRegistry
} from 'react-native'
import { DrawerNavigator } from 'react-navigation'
import { app } from './app'
import { Welcome, Home, Settings, Search } from './app/scenes'
import syncEnchancer from './app/utils/syncEnhancer'
import { Navigation } from 'react-native-navigation';

function registerScreens() {
  Navigation.registerComponent('example.Welcome', () => Welcome)
  Navigation.registerComponent('example.Search', () => Search)
  Navigation.registerComponent('example.Home', () => Home)
  Navigation.registerComponent('example.Settings', () => Settings)

}

registerScreens()
// start the app
syncEnchancer(Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'Home',
      screen: 'example.Home', // this is a registered name for a screen
      // icon: require('../img/one.png'),
      // selectedIcon: require('../img/one_selected.png'), // iOS only
      title: 'Home'
    },
    {
      label: 'Search',
      screen: 'example.Search',
      title: 'Search'
    },
    {
      label: 'Settings',
      screen: 'example.Settings',
      title: 'Settings'
    }
  ]
}));
