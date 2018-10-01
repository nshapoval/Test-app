import React from 'react';
import ReactDOM from 'react-dom';
import './setupTets';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store';
import RouteMap from './routes';

describe('App', () => {
  const Root = (
    <Provider store={store}>
      <BrowserRouter>
        <RouteMap /> 
      </BrowserRouter>
    </Provider>
  );
  
  it('Mount without crashing', ()=>{
    const wraper = mount(Root);

    const header = wraper.find(".App-header");
    expect(header).toHaveLength(1);

    const footer = wraper.find(".App-footer");
    expect(footer).toHaveLength(1);

    const profile = wraper.find(".Profile");
    expect(profile).toHaveLength(1);

    const h1 = wraper.find(".Profile>h1");
    expect(h1.text()).toEqual('Profile');
  })
})