import reducer, { initialState } from './reducer'
import actionTypes from './constants'

describe('Profile reducer', () => { 
  it('USERS_FETCH', () => {
    const action = {
      type: actionTypes.USERS_FETCH,
    }
    const state = reducer(initialState, action);

    expect(state.get('isLoading')).toEqual(true);
  })

  it('USERS_FETCH_SUCCESS', () => {
    const action = {
      type: actionTypes.USERS_FETCH_SUCCESS,
      payload: {
        firstName: 'John',
      }
    }
    const state = reducer(initialState, action);

    expect(state.get('user').toObject()).toEqual({ firstName: 'John' });
    expect(state.get('isLoading')).toEqual(false)
  })

  it('USERS_FETCH_ERROR', () => {
    const action = {
      type: actionTypes.USERS_FETCH_ERROR,
      payload: {
        message: 'Error',
      }
    }
    const state = reducer(initialState, action);

    expect(state.get('error').toObject()).toEqual({ message: 'Error' });
    expect(state.get('isLoading')).toEqual(false);
  })

  it('USERS_SAVE', () => {
    const action = {
      type: actionTypes.USERS_SAVE,
    }
    const state = reducer(initialState, action);

    expect(state.get('isLoading')).toEqual(true);
  })

  it('USERS_SAVE_SUCCESS', () => {
    const action = {
      type: actionTypes.USERS_SAVE_SUCCESS,
      payload: {
        firstName: 'John',
      }
    }
    const state = reducer(initialState, action);

    expect(state.get('user').toObject()).toEqual({ firstName: 'John' });
    expect(state.get('isLoading')).toEqual(false)
  })

  it('USERS_SAVE_ERROR', () => {
    const action = {
      type: actionTypes.USERS_SAVE_ERROR,
      payload: {
        message: 'Error',
      }
    }
    const state = reducer(initialState, action);

    expect(state.get('error').toObject()).toEqual({ message: 'Error' });
    expect(state.get('isLoading')).toEqual(false);
  })

})