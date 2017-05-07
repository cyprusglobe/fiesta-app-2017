/**
 * @flow
 */

import { StyleSheet } from 'react-native';

import { switchStylePerPlatform } from '../../utils';

export default StyleSheet.create({
  itemContainer: {
    ...switchStylePerPlatform(
      null,
      {
        flex: 1,
        // width: '100%',
        // height: '100%',
        flexDirection: 'row',
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: 'white',
        borderColor: 'lightgray',
        borderWidth: StyleSheet.hairlineWidth,
        marginVertical: 25,
        elevation: 2,
        marginTop: 2,
        marginBottom: 2,
      },
      null
    ),
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
  text: {
    flexWrap: 'wrap',
  },
  titleText: {
    color: 'gray',
  },
  subTitleText: {
    color: 'lightgray',
    fontSize: 12,
  },
});
