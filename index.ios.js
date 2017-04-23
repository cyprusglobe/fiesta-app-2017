/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React from 'react'
import {
  AppRegistry
} from 'react-native'
import { app } from './app'
import { Welcome, Home, Instagram, Search, Menu, Balloons, Balloon, Pilots, Pilot, Notifications } from './app/scenes'
import InstagramPhotoModal from './app/components/InstagramPhotoModal'
import syncEnchancer from './app/utils/syncEnhancer'

import { iconsLoaded } from './app/utils'

import { Navigation } from 'react-native-navigation';


function registerScreens() {
  Navigation.registerComponent('example.Menu', () => Menu)
  Navigation.registerComponent('example.Balloons', () => Balloons)
  Navigation.registerComponent('example.Balloon', () => Balloon)
  Navigation.registerComponent('example.Pilots', () => Pilots)
  Navigation.registerComponent('example.Pilot', () => Pilot)
  Navigation.registerComponent('example.Welcome', () => Welcome)
  Navigation.registerComponent('example.bf', () => Home)

  Navigation.registerComponent('example.Search', () => Search)
  Navigation.registerComponent('example.Instagram', () => Instagram)
  Navigation.registerComponent('example.InstagramPhotoModal', () => InstagramPhotoModal)

  Navigation.registerComponent('example.Notifications', () => Notifications)
}

// const HomeStack = StackNavigator({
//   Home_1_1: {
//     screen: Home
//   },
// })

// const BalloonsStack = StackNavigator({
//   Balloons_1_1: {
//     screen: Balloons
//   },
//   Balloon_1_1_1: {
//     screen: Balloon
//   },
//   Pilot_1_1_1_1: {
//     screen: Pilot
//   }
// })

// const PilotsStack = StackNavigator({
//   Pilots_1_1: {
//     screen: Pilots
//   },
//   Pilot_1_1_1: {
//     screen: Pilot
//   },
//   Balloon_1_1_1_1: {
//     screen: Balloon
//   }
// })

// const SimpleApp = DrawerNavigator({
//   Home_1: { screen: HomeStack },
//   Balloons_1: { screen: BalloonsStack },
//   Pilots_1: { screen: PilotsStack }
// },{
//   contentComponent: props => <Menu {...props} />
// });




// AppRegistry.registerComponent('FiestaApp2017', () => syncEnchancer(SimpleApp));


iconsLoaded.then(() => {
    // console.log(iconsMap)
    registerScreens();
    startApp();
});

function startApp () {
  syncEnchancer(Navigation.startSingleScreenApp({
    screen: {
      screen: 'example.bf', // unique ID registered with Navigation.registerScreen
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
}
