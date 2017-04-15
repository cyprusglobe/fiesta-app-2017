/**
 * @flow
 */

import { Platform, Dimensions } from 'react-native';

const app = {
  baseBlue: '#2C5197',
  navbar: {
    backgroundColor: '#D42B3A',
    menu: {
      text: {
        color: 'white',
      },
      icon: {
        color: 'white',
      },
    },
  },
  drawer: {
    backgroundColor: '#D42B3A',
    menu: {
      item: {
        backgroundColor: 'transparent',
        borderColor: 'white',
        text: {
          color: 'white',
        },
      },
    },
  },
};

const fontSize = {
  xsmall: 12,
  small: 14,
  default: 17,
  large: 24,
  xlarge: 32,
};

const statusBarHeight = Platform.OS === 'ios' ? 20 : 24;

export default {
  fontSize,
  statusBarHeight,
};

export const theme = {
  app,
};
