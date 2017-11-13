import React, { Component } from 'react'
import { Dialog, FlatButton, RaisedButton } from 'material-ui'
import StyledTextField from '../../components/TextField/TextField'
import { withTracker } from 'meteor/react-meteor-data'

import { Students } from '../../../api/student'
import { Programs } from '../../../api/program'


const styles = {
  style: {
    borderRadius:'18px', 
    marginBottom:'15px',
    padding:'0 16px',
  },
  labelStyle: {
    color:'#313131', 
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
    Meteor.call('student.addStudent', firstName, lastName, email, fullName);
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
        <FlatButton onClick={this.handleOpen} 
          label='+ Add new student' 
          labelStyle={styles.labelStyle} 
          backgroundColor='#f6f6f6'
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