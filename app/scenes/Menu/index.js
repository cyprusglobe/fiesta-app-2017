/**
 * @flow
 */

import React, { Component } from 'react';
import { Menu as MenuComponent } from '../../components';
import { MenuTesting as MenuTestingComponent } from '../../components/testing';
export default class Menu extends Component {
  render() {
    const isTesting = true;
    if (isTesting) {
      return <MenuTestingComponent {...this.props} />;
    }

    return <MenuComponent navigator={navigator} />;
  }
}
