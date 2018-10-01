import { fromJS } from 'immutable';

import actionTypes  from './constants';

export const initialState = fromJS({
  user: {},
  isLoading: false,
  error: {}
});

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USERS_FETCH:
    case actionTypes.USERS_SAVE:
      return state
        .set('isLoading', true);
    case actionTypes.USERS_FETCH_SUCCESS:
    case actionTypes.USERS_SAVE_SUCCESS:
      return state
        .set('isLoading', false)
        .set('user', fromJS(action.payload));
    case actionTypes.USERS_FETCH_ERROR:
    case actionTypes.USERS_SAVE_ERROR:
      return state
        .set('isLoading', false)
        .set('error', fromJS(action.payload));
    default:
      return state;
  }
};