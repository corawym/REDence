import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { withTracker } from "meteor/react-meteor-data"

import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'

import './styles.css'
import StyledTextField from '../../components/TextField/TextField'

const style = {
  margin: '0 auto',
  marginTop: '30%',
  width: '50%',
  textAlign: 'center',
  display: 'block',
  borderRadius: 5,
  padding: '15px'
}

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

    if( currentUserId ){
      return <Redirect to='/' />
    } else {
      null
    }

    return (
      <div className='login-container'>
        <Paper style={style} zDepth={4}>
          <form autoComplete='off' onSubmit={this.logIn}>
            <StyledTextField label='email' className='text-field' name='loginEmail'/>
            <br/>
            <StyledTextField label='password' type='password' name='loginPass'/>

            <Link to={`/signup`} className='links'> Forgot password? </Link>

            <RaisedButton type='submit' label='Log in' primary={true} style={{ width: '95%' }} />

            <Link to={`/signup`} className='links'> New user? </Link>
          </form>
        </Paper>
      </div>
    )

    
  }
}

export default withTracker(() => {
  return {
    currentUserId: Meteor.userId()
  }
})(Login)