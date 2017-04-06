/**
 * @flow
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import { Welcome } from '../../../app/scenes';

describe('Welcome', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Welcome />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
