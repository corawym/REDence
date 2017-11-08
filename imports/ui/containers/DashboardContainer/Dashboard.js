import React, { Component } from 'react'
import { Link, Redirect, Router } from 'react-router-dom'
import { withTracker } from "meteor/react-meteor-data"

import RaisedButton from 'material-ui/RaisedButton'



class Dashboard extends Component {

  logout(){
    Meteor.logout()
  }
  
  render() {
    const { currentUserId, userInfo } = this.props
    console.log( currentUserId )

    if(userInfo){
      console.log( userInfo.emails[0].address )      
    }

    return (
      <div>
        Hello from dashboard
        <Link to={`/login`}> <RaisedButton label='logout' primary={true} style={{ width: '95%' }} onClick={this.logout}/> </Link>
      </div>
    )
  }
}

export default withTracker(() => {
  return {
    currentUserId: Meteor.userId(),
    userInfo: Meteor.user()
  }
})(Dashboard)