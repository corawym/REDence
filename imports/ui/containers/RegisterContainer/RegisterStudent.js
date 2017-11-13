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
  },
  titleStyle: {
    fontSize:'1rem',
    fontFamily:'"Ubuntu", sans-serif',
  },
  flatButtonStyle: {
    fontFamily:'"Ubuntu", sans-serif',
    borderRadius:'18px',
    padding:'0 16px',
    margin: '0 15px 30px 0'
  },
  cancelLabelStyle:{
    color:'#969696'
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
        onClick={this.handleClose}
        style={styles.flatButtonStyle}
        labelStyle={styles.cancelLabelStyle}
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
          title="Add a new student"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          titleStyle={styles.titleStyle}
        >
          <form autoComplete="off" onSubmit={(e) => this.registerStudent(e)}>
            <StyledTextField label="First Name" className="text-field" name="firstName" />
            <StyledTextField label="Last Name" className="text-field" name="lastName" />
            <StyledTextField label="Email" className="text-field" name="email" />
            <RaisedButton label="Add" type="submit" backgroundColor="#e2231a"/>
          </form>
        </Dialog>
      </div>
    );
  }
}

export default RegisterContainer