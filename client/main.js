import React from 'react'
import ReactDOM from 'react-dom'
import Routes from '../imports/startup/client/routes'
import { Meteor } from 'meteor/meteor'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import muiTheme from '../imports/ui/config/theme'


const  REDance = () => (
  <MuiThemeProvider muiTheme={muiTheme} >
    <Routes/>
  </MuiThemeProvider>
)

Meteor.startup(() => {
  ReactDOM.render(
    <REDance />,
    document.getElementById('root')
  )
})