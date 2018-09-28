import { fromJS } from 'immutable';

import actionTypes  from './constants';

const initialState = fromJS({
  user: {},
  isLoading: false,
  error: {}
});

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USERS_FETCH:
      return state
        .set('isLoading', true)
    case actionTypes.USERS_FETCH_SUCCESS:
      return state
        .set('isLoading', false)
        .set('user', fromJS(action.payload))
    case actionTypes.USERS_FETCH_ERROR:
      return state
        .set('isLoading', false)
        .set('error', fromJS(action.payload))

    case actionTypes.USERS_SAVE:
      return state
        .set('isLoading', true)
    case actionTypes.USERS_SAVE_SUCCESS:
      return state
        .set('isLoading', false)
        .set('user', fromJS(action.payload))
    case actionTypes.USERS_SAVE_ERROR:
      return state
        .set('isLoading', false)
        .set('error', fromJS(action.payload))

    default:
      return state;
  }
};