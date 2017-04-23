/**
 * @flow
 */

import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';

import styles from './styles';

const MenuItemTesting = ({ children, action }) => {
  return (
    <TouchableOpacity style={styles.item} onPress={action}>
      {children}
    </TouchableOpacity>
  );
};

export default MenuItemTesting;
