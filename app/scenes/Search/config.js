/**
 * @flow
 */

import { theme } from '../../theme';

const navigatorStyles = {
  drawUnderNavBar: true,
  navBarTransparent: false,
  navBarTranslucent: false,
  navBarBackgroundColor: theme.app.navbar.backgroundColor,
  navBarTextColor: theme.app.navbar.menu.text.color,
  navBarButtonColor: theme.app.navbar.menu.icon.color,
  drawerBackgroundColor: theme.app.drawer.backgroundColor,
};

export default navigatorStyles;
