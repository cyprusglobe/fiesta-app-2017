/**
 * @flow
 */

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './modules';
import configureStore from './configureStore';
import Application from './scenes';

const store = configureStore();

const app = new Application(store, Provider);

app.run();
