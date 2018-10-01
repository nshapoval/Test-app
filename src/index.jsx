import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store';
import RouteMap from './routes';
import './index.scss';
import 'semantic-ui-css/semantic.min.css';
import registerServiceWorker from './registerServiceWorker';

const Root = (
  <Provider store={store}>
    <BrowserRouter>
      <RouteMap /> 
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));
registerServiceWorker();
