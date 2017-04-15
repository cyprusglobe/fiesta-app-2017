/**
 * @flow
 */

import { StyleSheet, Platform } from 'react-native';

import { theme } from '../../../theme';

export default StyleSheet.create({
  menu: {
    flex: 1,
    backgroundColor: theme.app.drawer.backgroundColor,
    paddingTop: 20,
    paddingBottom: 10,
    paddingHorizontal: 10,
  },
  menuButton: {
    width: 30,
    height: 30,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  menuButtonRight: {},
  menuMeta: {
    height: 45,
  },
  menuContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuContainerBorder: {
    borderTopWidth: 5,
    borderTopColor: theme.app.drawer.menu.item.borderColor,
  },
  menuContainerSpread: {
    justifyContent: 'space-between',
  },
  menuItem: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: 'white',
  },
  menuItemText: {
    color: theme.app.drawer.menu.item.text.color,
    fontWeight: 'bold',
    ...Platform.select({
      android: {
        // lineHeight: 31
      },
    }),
  },
  menuItemIconless: {
    // paddingLeft: 38,
    // alignItems: 'center'
  },
  menuListSeparator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    padding: 4,
  },
  menuList: {
    flexGrow: 1,
  },
});
