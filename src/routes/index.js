import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Character from '../pages/Character';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/character/:id" component={Character} />
  </Switch>
);

export default Routes;
