import React, { Component } from "react";
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import StyledTextField from "../../components/TextField/TextField";
import { Students } from '../../../api/student'
import { Programs } from '../../../api/program'
import { withTracker } from 'meteor/react-meteor-data'

const styles = {
  style: {
    borderRadius:'18px', 
    margin:'50px 0 15px 0'
  },
  labelStyle: {
    color:'white', 
    fontFamily:'"Ubuntu", sans-serif'
  }
}


class RegisterContainer extends Component{
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  registerStudent(e){
    this.setState({open: false});
    e.preventDefault();
    let firstName = e.target.firstName.value;
    let lastName = e.target.lastName.value;
    let email = e.target.email.value
    let fullName = `${firstName} ${lastName}`

    const studentUserInfo = Accounts.createUser({
      email: email,
      password: 'pass',
      profile: {
        fullName: fullName,  
        firstName: firstName,
        lastName: lastName,      
        role: 'student',
        program: [{ title: 'App Dev' }]
      }
    })

    Students.insert({
      fullName: fullName,
      program: [{ title: 'App Dev' }],
      email: email,
      role: 'student',
      missedDates: [],
      lateDates: [],
      sickDates: [],
      total: 90
    })
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />
    ];

    return (
      <div className='message-container'>
      <RaisedButton onClick={this.handleOpen} 
        label='Add new student' 
        labelStyle={styles.labelStyle} 
        backgroundColor='#e2231a'
        style={styles.style}/>

        <Dialog
          title="Add new student:"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <form autoComplete="off" onSubmit={(e) => this.registerStudent(e)}>
            <StyledTextField label="First Name" className="text-field" name="firstName" />
              <br />
            <StyledTextField label="Last Name" className="text-field" name="lastName" />
              <br />
            <StyledTextField label="Email" className="text-field" name="email" />
            <RaisedButton label="Add" primary={true} style={{ width: "95%" }} type="submit" />
          </form>
        </Dialog>
      </div>
    );
  }
}

export default RegisterContainer