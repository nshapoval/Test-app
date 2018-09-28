import profileEffects from '../pages/profile/effects';
import { all, fork } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([
    fork(profileEffects),
  ]);
}


