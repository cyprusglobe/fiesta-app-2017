/**
 * @flow
 */

import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { MenuItem } from '../';

import styles from './styles';

export default class ProfileItem extends Component {
  render() {
    let authorOnlyStyles, authorAllStyles;

    if (this.props.showAuthorPackagesOnly) {
      authorOnlyStyles = styles.menuProfileStatActive;
      authorAllStyles = styles.menuProfileStatInactive;
    } else {
      authorOnlyStyles = styles.menuProfileStatInactive;
      authorAllStyles = styles.menuProfileStatActive;
    }

    return (
      <MenuItem action={this.props.action}>
        <View style={styles.menuContainer} />
      </MenuItem>
    );
  }
}
