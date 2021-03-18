import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from '../views/dashboard';

function Routes() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Dashboard} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default Routes;
