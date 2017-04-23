/**
 * @flow
 */

export const INITIALIZE_UI = 'ui/INITIALIZE_UI';

export function initializeUi() {
  return async (dispatch, getState) => {
    dispatch({
      type: INITIALIZE_UI,
      payload: {},
    });
  };
}

const initialState = {
  stuff: '',
};

export default function ui(state = initialState, action) {
  switch (action.type) {
    case INITIALIZE_UI:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}
