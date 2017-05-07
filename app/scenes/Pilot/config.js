/**
 * @flow
 */

import { Image } from 'react-native';

import { theme } from '../../theme';

import { selectPlatform } from '../../utils';

const navigatorStyles = {
  drawUnderNavBar: false,
  navBarTransparent: false, // TODO:  Check this on iOS
  navBarTranslucent: false, // TODO:  Check this on iOS
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
