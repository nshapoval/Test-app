import actionTypes  from './constants';

export default {
  fetchUser: (id) => {
    return {
      type: actionTypes.USERS_FETCH,
      payload: id,
    }
  },
  fetchUserSuccess: (user) => {
    return {
      type: actionTypes.USERS_FETCH_SUCCESS,
      payload: user,
    }
  },
  fetchUserError: (error) => {
    return {
      type: actionTypes.USERS_FETCH_ERROR,
      payload: error,
    }
  },
  saveUser: (id) => {
    return {
      type: actionTypes.USERS_SAVE,
      payload: id,
    }
  },
  saveUserSuccess: (user) => {
    return {
      type: actionTypes.USERS_SAVE_SUCCESS,
      payload: user,
    }
  },
  saveUserError: (error) => {
    return {
      type: actionTypes.USERS_SAVE_ERROR,
      payload: error,
    }
  }
}