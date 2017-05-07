import { StyleSheet } from 'react-native';

import { theme } from '../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    // paddingBottom: 50,
    backgroundColor: theme.app.flatlist.events.list.backgroundColor,
  },
  map: {
    flex: 1,
  },
  buttonContainer: {
    height: 100,
  },
  customView: {
    width: 200,
    height: 100,
  },
});
