import axios from 'axios';
import constants from './constants';
import actions from './actions';
import { takeEvery, put, call, all, fork } from 'redux-saga/effects';

function* fetchUser ({payload}) {
  try {
    const res = yield call(axios, {
      method: 'get',
      url: `/api/user/${payload}`,
    });
    yield put(actions.fetchUserSuccess(res.user));
  } catch(err) {
    yield put(actions.fetchUserError(err)) 
  }
}

function* takeUser(){
  takeEvery(constants.USERS_FETCH, fetchUser)
}

export default function* (){
  yield all([
    fork(takeUser)
  ])
}
