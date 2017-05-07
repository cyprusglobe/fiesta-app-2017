/**
 * @flow
 */

import { theme } from '../../theme';

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    // flex: 1,
    width: '100%',
    height: '100%',
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.app.baseBlue,
    paddingTop: 25,
  },
});
