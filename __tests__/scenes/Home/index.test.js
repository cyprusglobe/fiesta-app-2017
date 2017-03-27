/**
 * @flow
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import { Home } from '../../../app/scenes';

describe('Home', () => {
	it('renders correctly', () => {
		const tree = renderer.create(
			<Home navigation={{}} />
		).toJSON();

		expect(tree).toMatchSnapshot();
	});
});
