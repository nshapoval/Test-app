import actionTypes  from './constants';

export default {
  fetchUser() {
    return {
      type: actionTypes.USERS_FETCH,
    }
  },
  fetchUserSuccess(user) {
    return {
      type: actionTypes.USERS_FETCH_SUCCESS,
      payload: user || {},
    }
  },
  fetchUserError(error) {
    return {
      type: actionTypes.USERS_FETCH_ERROR,
      payload: error,
    }
  },
  saveUser(user) {
    return {
      type: actionTypes.USERS_SAVE,
      payload: user,
    }
  },
  saveUserSuccess(user) {
    return {
      type: actionTypes.USERS_SAVE_SUCCESS,
      payload: user,
    }
  },
  saveUserError(error) {
    return {
      type: actionTypes.USERS_SAVE_ERROR,
      payload: error,
    }
  }
}