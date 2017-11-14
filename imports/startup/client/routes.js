import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom'

import Login from '../../ui/containers/LoginContainer/Login'
import Signup from '../../ui/containers/SignupContainer/Signup'
import Dashboard from '../../ui/containers/DashboardContainer/Dashboard'

const Routes = () => (
  <Router>
      <Switch>
        <Route exact path='/' component={Dashboard}/>
        <Route path='/signup' component={Signup}/>
        <Route path='/login' component={Login}/>
      </Switch>
  </Router>
)

export default Routes