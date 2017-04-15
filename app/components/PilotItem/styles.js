/**
 * @flow
 */

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  itemContainer: {
    flex: 1,
    // width: '100%',
    // height: '100%',
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: 'lightgray',
    borderWidth: StyleSheet.hairlineWidth,
    marginRight: 25,
    marginLeft: 25,
    elevation: 4,
    marginTop: 5,
    marginBottom: 5,
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
