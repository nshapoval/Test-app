
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { state } from './root-reducer';
import rootSaga from './root-saga';
import { reactReduxFirebase } from 'react-redux-firebase';
import { reduxFirestore } from 'redux-firestore';
import firebase from './firebase';
const sagaMiddleware = createSagaMiddleware();

const middleware = process.env.NODE_ENV === 'development' 
  ? composeWithDevTools(applyMiddleware(sagaMiddleware))
  : applyMiddleware(sagaMiddleware);

const store = createStore(state,
  compose (
    reactReduxFirebase(firebase),
    reduxFirestore(firebase),
    middleware
  )
);

sagaMiddleware.run(rootSaga);

export default store;
