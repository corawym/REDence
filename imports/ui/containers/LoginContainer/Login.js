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

  render() {
    return (
      <div className='login-container'>
        <Paper style={style} zDepth={4}>
          <form onSubmit={login} autoComplete='off'>
            <StyledTextField hintText="Email" label='lol' className='text-field'/>
            <br/>
            <StyledTextField hintText="Password" />

            <Link to={`/signup`} className='links'>
              <a> Forgot password? </a>
            </Link>

            <RaisedButton label='Log in' primary={true} style={{ width: '95%' }}/>

            <Link to={`/signup`} className='links'>
              <a> New user? </a>
            </Link>
          </form>
        </Paper>
      </div>
    )
  }
}



