/**
 * @flow
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import { Balloons } from '../../../app/scenes';

describe('Home', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Balloons />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
