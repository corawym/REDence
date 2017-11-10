import React from 'react'
import FlatButton from 'material-ui/FlatButton';
import moment from 'moment'

const TeacherMailList = ({allTeacherMessages, confirmationEmail}) => {
  return (
    <ul>
      {
        allTeacherMessages.map(message =>{
        return  <li key={message._id}>
                  <p>{message.sender[0].fullName} {moment(message.dateSent).format('LT')}</p>
                  <p>{message.message} {message.status? message.status : <span><FlatButton label="Approve" onClick={(e) => confirmationEmail(e,message._id,'accept')}/> <FlatButton label="Decline" onClick={(e) => confirmationEmail(e,message._id,'decline')}/></span>}</p> 
                </li>
        })
      }
    </ul>
  )
}

export default TeacherMailList;