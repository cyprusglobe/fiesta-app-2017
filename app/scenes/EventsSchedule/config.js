/**
 * @flow
 */

import { Image } from 'react-native';

import { theme } from '../../theme';

const navigatorStyles = {
  drawUnderNavBar: false,
  // navBarHidden: true,
  // navBarTransparent: true,
  // navBarTranslucent: true,
  topBarElevationShadowEnabled: false,
  navBarBackgroundColor: theme.app.navbar.backgroundColor,
  navBarTextColor: theme.app.navbar.menu.text.color,
  navBarButtonColor: theme.app.navbar.menu.icon.color,
  drawerBackgroundColor: theme.app.drawer.backgroundColor,
};

const navigatorButtons = {
  leftButtons: [
    {
      id: 'sideMenu',
    },
  ],
  rightButtons: [
    {
      title: 'Filter',
      id: 'filter_balloons',
      showAsAction: 'always',
      icon: require('../../../images/filter_android.png'),
    },
  ],
};

export const config = {
  navigatorStyles,
  navigatorButtons,
};
