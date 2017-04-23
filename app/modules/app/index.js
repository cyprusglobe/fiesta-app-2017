/**
 * @flow
 */

import { initializeUi } from '../ui';
import { NetInfo, AppState } from 'react-native';

/**
 * Constants
 */
export const INITIALIZED = 'app/INITIALIZED';
export const CHANGE_NET_STATUS = 'app/CHANGE_NET_STATUS';
export const CHANGE_APP_STATE = 'app/CHANGE_APP_STATE';

/**
 * Action Creators
 */

export function init(startAppWithScreen, navigator) {
  return async (dispatch, getState) => {
    dispatch(setupAppStatusListener());
    dispatch(setupNetStatusListener());

    const navigate = startAppWithScreen
      ? startAppWithScreen
      : navigator.resetTo;

    // dispatch({ type: INITIALIZED, date: { time: new Date().toString() } })
    try {
      const netStatus = await NetInfo.fetch();

      if (netStatus === 'none' || netStatus === 'NONE') {
        navigate({ screen: 'bf.Pilots' });
        return;
      }
    } catch (error) {
      dispatch({ type: INITIALIZED, error: error.message });
      navigate({ screen: 'bf.Home' });
    }
    navigate({ screen: 'bf.Home' });
  };
}

function setupNetStatusListener() {
  return dispatch => {
    NetInfo.isConnected.addEventListener('change', async status => {
      dispatch({ type: CHANGE_NET_STATUS, payload: status });
    });
  };
}

function setupAppStatusListener() {
  return async (dispatch, getState) => {
    AppState.addEventListener('change', async status => {
      try {
        dispatch({ type: CHANGE_APP_STATE, payload: status });
        const netStatus = getState().app.status;
        if (!netStatus) {
          return;
        }
      } catch (error) {}
    });
  };
}

/**
 * Reducer
 */

const initialState = {
  online: false,
  appState: null,
  fayeConnected: false,
};

export default function app(state = initialState, action) {
  switch (action.type) {
    case INITIALIZED:
      return {
        ...state,
        error: app.payload,
      };
    case CHANGE_NET_STATUS:
      return {
        ...state,
        online: action.payload,
      };
    case CHANGE_APP_STATE:
      return {
        ...state,
        appState: action.payload,
      };
    default:
      return state;
  }
}
