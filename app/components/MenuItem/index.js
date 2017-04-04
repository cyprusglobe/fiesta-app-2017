/**
 * @flow
 */

import React, { Component } from 'react'
import {
    TouchableOpacity,
} from 'react-native'

import styles from './styles'

class MenuItem extends Component {
  render () {
    return (
      <TouchableOpacity style={styles.item} onPress={this.props.action}>
        {this.props.children}
      </TouchableOpacity>
    );
  }
}

export default MenuItem
