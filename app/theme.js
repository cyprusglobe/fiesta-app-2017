/**
 * @flow
 */

import { Platform, Dimensions } from 'react-native'


const color = {

}

const fontSize = {
  xsmall: 12,
  small: 14,
  default: 17,
  large: 24,
  xlarge: 32
}

const statusBarHeight = Platform.OS === 'ios' ? 20 : 24;

export default {
  fontSize,
  statusBarHeight
}