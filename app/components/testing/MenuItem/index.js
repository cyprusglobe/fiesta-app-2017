/**
 * @flow
 */

import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';

import styles from './styles';

class MenuItemTesting extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.item} onPress={this.props.action}>
        {this.props.children}
      </TouchableOpacity>
    );
  }
}

export default MenuItemTesting;
