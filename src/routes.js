import React from  'react';
import { Redirect, Route, Switch } from 'react-router';
import Profile from './pages/profile';

const routes = [
  {
    path: '/',
    component: Profile,
    exact: true,
  }
];

const RouteMap = () => (
  <React.Fragment>
    <Switch>
      { routes.map((item, index) => <Route { ...item } key={index} />) }
      <Redirect exact from="*" to="/" />
    </Switch>
  </React.Fragment>
);

export default RouteMap;