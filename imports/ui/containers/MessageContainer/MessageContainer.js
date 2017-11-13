import React, { Component } from 'react'
import moment from 'moment'
import { withTracker } from 'meteor/react-meteor-data'
import { Dialog, FlatButton, RaisedButton, FloatingActionButton } from 'material-ui'
import MessageIcon from 'material-ui/svg-icons/communication/chat'

import { Messages } from '../../../api/messages'
import { Teachers } from '../../../api/teacher'

import StyledTextField from '../../components/TextField/TextField'


const styles = {
  FloatingActionButton: {
    position:'fixed',
    bottom:'20px',
    right:'20px',
  },
  titleStyle: {
    fontSize:'1rem',
    fontFamily:'"Ubuntu", sans-serif',
  },
  flatButtonStyle: {
    fontFamily:'"Ubuntu", sans-serif',
    borderRadius:'18px',
    padding:'0 16px',
    margin: '30px 15px 30px 0'
  },
  sendLabelStyle: {
    color:'white'
  },
  cancelLabelStyle:{
    color:'#969696'
  }
}

class MessageContainer extends Component{
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  sendMessage(e){
    this.setState({open: false});
    e.preventDefault();
    let subject = e.target.subject.value;
    let message = e.target.message.value;

    const currentTime = moment().format();

    const { studentInfo, allTeachers } = this.props
    let teacherSent = [];
    allTeachers.forEach((teacher) => {
      teacher.programs.forEach(program =>{
        if(program._id === studentInfo.program[0]._id){
          teacherSent.push(teacher);
        }
      })
    });
    Messages.insert({
      sender: [this.props.studentInfo],
      receiver: teacherSent,
      subject: subject,
      message: message,
      dateSent: currentTime,
      status: null
    })
  }

  render() {
    return (
      <div className='message-container'>
        <FloatingActionButton onClick={this.handleOpen} backgroundColor='#313131' style={styles.FloatingActionButton} className='message-floating-btn'>
          <MessageIcon />
        </FloatingActionButton>
        <Dialog
          title="To: Mandi, Mack"
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          titleStyle={styles.titleStyle}
        >
          <form autoComplete="off" onSubmit={(e) => this.sendMessage(e)}>
            <StyledTextField label="Subject" className="text-field" name="subject" />
            <StyledTextField label="Message" className="text-field" name="message" />
            <FlatButton 
              label="Send" 
              style={styles.flatButtonStyle} 
              type="submit" 
              labelStyle={styles.sendLabelStyle} 
              backgroundColor="#e2231a"
              hoverColor="#313131"
            />
            <FlatButton 
              label="Cancel" 
              onClick={this.handleClose} 
              style={styles.flatButtonStyle} 
              labelStyle={styles.cancelLabelStyle}
            />            
          </form>
        </Dialog>
      </div>
    )
  }
}

export default withTracker(() => {
  Meteor.subscribe('teacher')
  return {
    allTeachers: Teachers.find({}).fetch(),
  }
})(MessageContainer)