/**
 * @flow
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import { Settings } from '../../../app/scenes';

describe('Home', () => {
	it('renders correctly', () => {
		const tree = renderer.create(
			<Settings />
		).toJSON();

		expect(tree).toMatchSnapshot();
	});
});
