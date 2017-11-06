import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import {Tabs, Tab} from 'material-ui/Tabs'
import RaisedButton from 'material-ui/RaisedButton'

import './styles.css'
import StyledTextField from '../../components/TextField/TextField'

export default class Signup extends Component {

  constructor(props) {
    super(props)
    this.state = {
      value: 'a',
    }
  }

  handleChange = (value) => {
    this.setState({
      value: value,
    })
  }


  render() {
    return (
      <Tabs
        value={this.state.value}
        onChange={this.handleChange}
        className='signup-tabs'
      >
        <Tab label="Student" value="a" className='tab-container'>
          <StyledTextField hintText="Email" label='email' className='text-field'/>
            <br/>
          <StyledTextField hintText="Password" label='password' />

          <Link to={`/signup`} className='links'>
            <a> Forgot password? </a>
          </Link>

          <RaisedButton label='Sign up' primary={true} style={{ width: '95%' }}/>

          <Link to={`/signup`} className='links'>
            <a> New user? </a>
          </Link>
        </Tab>

        <Tab label="Teacher" value="b" className='tab-container'>
          <StyledTextField hintText="Email" label='email' className='text-field'/>
            <br/>
          <StyledTextField hintText="Password" label='password' />
          <p> Teacher Code </p>
          <StyledTextField hintText="Code" label='password' />

          <Link to={`/signup`} className='links'>
            <a> Forgot password? </a>
          </Link>

          <RaisedButton label='Sign up' primary={true} style={{ width: '95%' }}/>

          <Link to={`/signup`} className='links'>
            <a> New user? </a>
          </Link>
        </Tab>
      </Tabs>
    )
  }
}



