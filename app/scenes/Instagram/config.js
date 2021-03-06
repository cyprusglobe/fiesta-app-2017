/**
 * @flow
 */

import { Image } from 'react-native';

import { theme } from '../../theme';

const navigatorStyles = {
  drawUnderNavBar: false,
  // navBarHidden: true,
  // navBarTransparent: true,
  // // navBarTranslucent: true,
  navBarBackgroundColor: theme.app.navbar.backgroundColor,
  navBarTextColor: theme.app.navbar.menu.text.color,
  navBarButtonColor: theme.app.navbar.menu.icon.color,
  drawerBackgroundColor: theme.app.drawer.backgroundColor,
};

const navigatorButtons = {};

export const config = {
  navigatorStyles,
  navigatorButtons,
};
