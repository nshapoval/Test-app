import { takeEvery, put, call, all, fork, select } from 'redux-saga/effects';
import constants from './constants';
import actions from './actions';
import { getUsers, putUser as putUserService } from './services';

function* fetchUser () {
  try {
      const result = yield call(getUsers);
      yield put(actions.fetchUserSuccess(result[0]));
  } catch(err) {
    yield put(actions.fetchUserError(err));
  }
}

function* putUser ({payload}) {
  try {
    const id = yield select(state => state.profile.get('user').get('id'));
    const res = yield call(putUserService, id, payload);
    console.log('res');
    console.log(res);
    yield put(actions.saveUserSuccess(res));
  } catch(err) {
    yield put(actions.saveUserError(err));
  }
}

function* takeUsersFetch(){
  yield takeEvery(constants.USERS_FETCH, fetchUser)
}

function* updateUser(){
  yield takeEvery(constants.USERS_SAVE, putUser)
}


export default function* (){
  yield all([
    fork(takeUsersFetch),
    fork(updateUser)
  ])
}
