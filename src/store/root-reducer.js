import { combineReducers } from 'redux';
import profileReduser from '../pages/profile/reducer';

export const state = combineReducers({
  profile: profileReduser,
});