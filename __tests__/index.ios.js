import 'react-native'
import React from 'react'
// import Index from '../index.ios.js'
import { app } from '../app'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

describe('app.FiestaApp2017', () => {
  it('renders correctly', () => {
    const instance = renderer.create(
      <app.FiestaApp2017 />
    );

    expect(instance.toJSON()).toMatchSnapshot();
  });
});
