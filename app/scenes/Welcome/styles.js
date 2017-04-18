import { StyleSheet } from 'react-native';

import { theme } from '../../theme';

export default StyleSheet.create({
  welcome: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 50,
    backgroundColor: theme.app.baseBlue,
  },
  welcomeText: {
    width: 200,
    height: 20,
    fontSize: 14,
    color: '#7f8c8d',
    textAlign: 'center',
  },
  welcomeImage: {
    width: 200,
    height: 200,
  },
});
