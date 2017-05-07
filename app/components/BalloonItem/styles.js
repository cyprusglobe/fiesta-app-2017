/**
 * @flow
 */

import { StyleSheet } from 'react-native';

import { theme } from '../../theme';

export default StyleSheet.create({
  itemContainer: {
    flex: 1,
    height: 70,
    // width: '100%',
    // height: '100%',
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.app.flatlist.balloons.item.backgroundColor,
    borderColor: 'lightgray',
    borderWidth: StyleSheet.hairlineWidth,

    elevation: 2,
  },
  itemSeperator: {
    height: 10,
  },
  balloonImage: {
    width: 50,
    height: 50,
    margin: 10,
  },
  textContainer: {
    paddingLeft: 20,
    flexDirection: 'column',
  },
  titleText: {
    color: 'gray',
  },
  subTitleText: {
    color: 'lightgray',
    fontSize: 12,
  },
});
