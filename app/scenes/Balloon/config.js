/**
 * @flow
 */

import { Platform, Image } from 'react-native';

import { theme } from '../../theme';

import { selectPlatform } from '../../utils';

const navigatorStyles = {
  drawUnderNavBar: false,
  // navBarHidden: true,
  navBarTransparent: selectPlatform('android', true),
  navBarTranslucent: selectPlatform('android', true),
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
