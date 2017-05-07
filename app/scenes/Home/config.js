/**
 * @flow
 */

import React from 'react';

import { Image, Text, Button, PixelRatio } from 'react-native';

import { theme } from '../../theme';

import Icon from 'react-native-vector-icons/Ionicons';

const navigatorStyles = {
  drawUnderNavBar: false,
  // navBarHidden: true,
  // navBarTransparent: true,
  // navBarTranslucent: true,
  navBarBackgroundColor: theme.app.navbar.backgroundColor,
  navBarTextColor: theme.app.navbar.menu.text.color,
  navBarButtonColor: theme.app.navbar.menu.icon.color,
  drawerBackgroundColor: theme.app.drawer.backgroundColor,
};

const navigatorButtons = {
  leftButtons: [
    {
      id: 'sideMenu',
      // icon: iconsMap['menu-white'],
      // showAsAction: 'always'
    },
  ],
  rightButtons: [
    {
      title: 'Search',
      id: 'search',
      showAsAction: 'always',
    },
  ],
};

export const config = {
  navigatorStyles,
  navigatorButtons,
};
