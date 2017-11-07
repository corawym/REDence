import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'

import './styles.css'
import StyledTextField from '../../components/TextField/TextField'

const style = {
  margin: '0 auto',
  marginTop: '40%',
  width: '50%',
  textAlign: 'center',
  display: 'block',
  borderRadius: 5,
  border: '2px solid red',
  padding: '15px'
}

export default class Login extends Component {


  logIn(e){
    e.preventDefault()
  console.log('lol')
  }

  render() {
    return (
      <div className='login-container'>
        <Paper style={style} zDepth={4}>
          <form autoComplete='off' onSubmit={this.logIn}>
            <StyledTextField hintText="Email" label='email' className='text-field' />
            <br/>
            <StyledTextField hintText="Password" label='password' />

            <Link to={`/signup`} className='links'> Forgot password? </Link>

            <RaisedButton type='submit' label='Log in' primary={true} style={{ width: '95%' }} />

            <Link to={`/signup`} className='links'> New user? </Link>
          </form>
        </Paper>
      </div>
    )
  }
}
