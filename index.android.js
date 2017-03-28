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
import { Home, Settings, Search } from './app/scenes'
import syncEnchancer from './app/utils/syncEnhancer'
import { Navigation } from 'react-native-navigation';

function registerScreens() {
  Navigation.registerComponent('example.Search', () => Search)
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
