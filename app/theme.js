/**
 * @flow
 */

import { Platform, Dimensions } from 'react-native';

import { switchStylePerPlatform } from './utils';

const app = {
  baseBlue: '#2C5197',
  baseRed: '#D42B3A',
  flatlist: {
    pilots: {
      list: {
        ...switchStylePerPlatform(
          {
            backgroundColor: 'red',
          },
          {
            backgroundColor: '#F5F5F5',
          },
          null
        ),
      },
      item: {
        ...switchStylePerPlatform(null, null, null),
      },
    },
    events: {
      list: {
        ...switchStylePerPlatform(
          null,
          {
            backgroundColor: '#F5F5F5',
          },
          null
        ),
      },
      item: {
        ...switchStylePerPlatform(null, null, null),
      },
    },
    balloons: {
      list: {
        backgroundColor: '#F5F5F5',
      },
      item: {
        backgroundColor: 'white',
        image: {},
        loadingStyleColor: '#D42B3A',
      },
    },
  },
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
