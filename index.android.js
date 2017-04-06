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
import { Welcome, Home, Settings, Search, Menu, Balloons } from './app/scenes'
import syncEnchancer from './app/utils/syncEnhancer'
import { Navigation } from 'react-native-navigation';

function registerScreens() {
  Navigation.registerComponent('example.Menu', () => Menu)
    Navigation.registerComponent('example.Balloons', () => Balloons)
  Navigation.registerComponent('example.Welcome', () => Welcome)
  Navigation.registerComponent('example.Home', () => Home)

  Navigation.registerComponent('example.Search', () => Search)
  Navigation.registerComponent('example.Settings', () => Settings)
}

registerScreens();

syncEnchancer(Navigation.startSingleScreenApp({
  screen: {
    screen: 'example.Home', // unique ID registered with Navigation.registerScreen
    title: 'Home', // title of the screen as appears in the nav bar (optional)
    leftButtons: [
			{
				id: 'sideMenu'
			}
		],
    navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
    navigatorButtons: {} // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
  },
  drawer: {
    left: {
      screen: 'example.Menu',
    }
  }
}));
