import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { withTracker } from 'meteor/react-meteor-data'

import { Paper, FlatButton } from 'material-ui'

import './styles.css'
import { Teachers } from '../../../api/teacher'
import { Programs } from '../../../api/program'
import StyledTextField from "../../components/TextField/TextField"


const styles = {
  style: {
    borderRadius:'18px', 
    margin:'50px 0 15px 0'
  },
  labelStyle: {
    color:'white', 
    fontFamily:'"Ubuntu", sans-serif'
  },
  labelDisableStyle: {
    color:'#969696', 
    fontFamily:'"Ubuntu", sans-serif'
  }
}

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "a",
      code: "meow"
    }
  }

  signUpTeacher(e) {
    e.preventDefault();
    let email = e.target.teacherEmail.value;
    let pass = e.target.teacherPassword.value;
    let firstName = e.target.firstName.value;
    let lastName = e.target.lastName.value;
    let fullName = `${firstName} ${lastName}`

    const teacherUserInfo = Accounts.createUser({
      email: email,
      password: pass,
      profile: {
        fullName: fullName,        
        role: 'teacher',
        program: []
      }
    })

    Teachers.insert({
      fullName: fullName,
      email: email,
      role: 'teacher',
      programs: Programs.find({ $or: [{title: 'Web Dev'}, {title: 'App Dev'} ]}).fetch()
    })
  }

  handleCode(e) {
    this.setState({
      code: e.target.value
    })
  }

  render() {
    const { currentUserId } = this.props;

    if (currentUserId) {
      return <Redirect to='/' />
    } else {
      null;
    }

    return (
      <div className='login-page signup-page'>

        <div className='login-page-wrapper'>
          <h1 className='login-header text-center'>RED<span>en:ce</span></h1>
          <h2 className='login-header-subtitle text-center'>Take attendance and Check attendance easier</h2>
          
          <Paper zDepth={1} className='login-card-container'>
            <p className='main-font-family'>For new teachers only</p>
            <form autoComplete='off' onSubmit={this.signUpTeacher}>
              <StyledTextField label='First Name' name='firstName' />
              <StyledTextField label='Last Name' name='lastName' />
              <StyledTextField label='Email' name='teacherEmail' />
              <StyledTextField label='Password' type='password' name='teacherPassword' />
              <StyledTextField onChange={e => this.handleCode(e)} label='Teacher code' name='code' value={this.state.code} />

              <FlatButton 
                disabled={this.state.code === "hi" ? false : true}
                type='submit' 
                fullWidth={true}
                label='Sign up' 
                labelStyle={this.state.code === "hi" ? styles.labelStyle : styles.labelDisableStyle } 
                backgroundColor={this.state.code === "hi" ? '#e2231a' : '#f6f6f6'}
                hoverColor='#313131'
                style={styles.style}
              />

              <p className='text-center links-wrapper'><Link to={`/login`} className='links main-font-family'> Returning teachers and students? </Link></p>
            </form>
          </Paper>

        </div>

        <p className='login-footer signup-footer text-center'>Copyright created by Bobby, Cora, Mark in 2017</p>
      </div>
    )
  }
}

export default withTracker(() => {
  return {
    currentUserId: Meteor.userId()
  }
})(Signup)
