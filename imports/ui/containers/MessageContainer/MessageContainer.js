import React, { Component } from "react";
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import MessageIcon from 'material-ui/svg-icons/communication/chat';
import StyledTextField from "../../components/TextField/TextField";
import { Messages } from '../../../api/messages'
import moment from 'moment'
import { withTracker } from 'meteor/react-meteor-data'
import { Teachers } from '../../../api/teacher'


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
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />
    ];

    return (
      <div className='message-container'>
      <FloatingActionButton onClick={this.handleOpen} backgroundColor='#e2231a'>
        <MessageIcon />
      </FloatingActionButton>
        <Dialog
          title="To: Mandi, Mack"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <form autoComplete="off" onSubmit={(e) => this.sendMessage(e)}>
            <StyledTextField label="Subject" className="text-field" name="subject" />
              <br />
            <StyledTextField label="Message" className="text-field" name="message" />
            <RaisedButton label="Send" primary={true} style={{ width: "95%" }} type="submit" />
          </form>
        </Dialog>
      </div>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe('teacher')
  return {
    allTeachers: Teachers.find({}).fetch(),
  }
})(MessageContainer)