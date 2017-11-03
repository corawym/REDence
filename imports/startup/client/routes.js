import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';

import Dashboard from '../../ui/containers/DashboardContainer/Dashboard'

const Routes = () => (
  <Router>
      <Switch>
        {/* <Login /> */}
        {/* <Route exact path='/' component={CardContainer}/> */}
        <Route path='/' component={Dashboard}/>
        {/* <Route path='/share' component={Share}/> */}
        {/* <Route component={CantBeFound}/> */}
      </Switch>
  </Router>
);

export default Routes;