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
import { Home, Settings } from './app/scenes'

const Stack = DrawerNavigator({
  Home: { screen: Home },
  Settings: { screen: Settings },
});


AppRegistry.registerComponent('FiestaApp2017', () => Stack)
