import { takeEvery, put, call, all, fork } from 'redux-saga/effects';
import constants from './constants';
import actions from './actions';
import { getUsers } from './services';

function* fetchUser () {
  try {
      const result = yield call(getUsers);
      yield put(actions.fetchUserSuccess(result[0]));
  } catch(err) {
    yield put(actions.fetchUserError(err));
  }
}

function* takeUsersFetch(){
  yield takeEvery(constants.USERS_FETCH, fetchUser)
}

export default function* (){
  yield all([
    fork(takeUsersFetch)
  ])
}
