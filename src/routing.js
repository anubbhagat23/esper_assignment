import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './components/dashboard';
import SignIn from './components/login';
import Device from './components/device';
import Groups from './components/groups';
export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      {/* <Route exact path="/dashboard" component={Dashboard} /> */}
      <Route exact path="/devices" component={Device} />
      <Route exact path="/groups" component={Groups} />
      {/* redirect user to SignIn page if route does not exist and user is not authenticated */}
      <Route exact component={SignIn} />
    </Switch>
  );
}