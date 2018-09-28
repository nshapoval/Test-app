import { combineReducers } from 'redux';
import profileReduser from '../pages/profile/reducer';
import { firebaseReducer} from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

export const state = combineReducers({
  profile: profileReduser,
  firebase: firebaseReducer,
  firestore: firestoreReducer
});