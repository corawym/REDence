import React from 'react'
import ReactDOM from 'react-dom'
import Routes from '../imports/startup/client/routes'
import { Meteor } from 'meteor/meteor'


const  REDance = () => (
  <div>
    <Routes/>
  </div>
)

Meteor.startup(() => {
  ReactDOM.render(
    <REDance />,
    document.getElementById('root')
  )
})