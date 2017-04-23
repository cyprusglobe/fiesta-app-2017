/**
 * @flow
 */

import { combineReducers } from 'redux';

import ui from './ui';
import app from './app';

const rootReducer = combineReducers({
  ui,
  app,
});

export default rootReducer;
