import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { withTracker } from "meteor/react-meteor-data"

import { Paper, FlatButton } from 'material-ui'

import './styles.css'
import StyledTextField from '../../components/TextField/TextField'

class Login extends Component {

  logIn(e){
    e.preventDefault()
    let email = e.target.loginEmail.value
    let pass = e.target.loginPass.value
    Meteor.loginWithPassword(email, pass, function(error){
      if(error){
        alert(error)
      } else {
        console.log(this.props)
      }
    });
  }

  render() {
    const { currentUserId, userInfo } = this.props
    console.log( currentUserId )

    if( currentUserId ){
      return <Redirect to='/' />
    } else {
      null
    }

    return (
      <div className='login-page'>

        <div className='login-page-wrapper'>
          <h1 className='login-header text-center'>RED<span>en:ce</span></h1>
          <h2 className='login-header-subtitle text-center'>Take attendance and Check attendance easier</h2>
          <Paper zDepth={1} className='login-card-container'>
            <form autoComplete='off' onSubmit={this.logIn}>
              <StyledTextField label='email' className='text-field' name='loginEmail'/>
              <StyledTextField label='password' type='password' name='loginPass'/>
              <p><Link to={`/signup`} className='links main-font-family'> Forgot password? </Link></p>

              <FlatButton 
              type='submit' 
              label='Log in'  
              backgroundColor='#313131'
              hoverColor='#e2231a'
              fullWidth={true}
              labelStyle={{color:'white', fontFamily:'"Ubuntu", sans-serif'}}
              style={{borderRadius:'18px', margin:'50px 0 15px 0'}}
              className='submit-button'/>

              <p className='text-center'><Link to={`/signup`} className='links main-font-family'> New user? </Link></p>
            </form>
          </Paper>
        </div>
        <p className='login-footer text-center'>Copyright created by Bobby, Cora, Mark in 2017</p>
      </div>
    )
  }
}

export default withTracker(() => {
  return {
    currentUserId: Meteor.userId()
  }
})(Login)