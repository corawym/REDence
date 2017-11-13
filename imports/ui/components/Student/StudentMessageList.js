import React from 'react'
import moment from 'moment'
import { Avatar } from 'material-ui'

import './styles.css'

const StudentMessageList = ({allStudentMessages,studentInfo}) => {
  return(
    <ul className="dashboard-student-message">
      { allStudentMessages.map(message =>{
          return (
            <li key={message._id}>
              <div className="display-flex dashboard-message-container">
                <Avatar size={50} backgroundColor='#969696' className='message-avatar'>{studentInfo.fullName[0]}</Avatar>
                <div>
                  <p className="message-time">{moment(message.dateSent).format('LLL')} <span className="message-status">{message.status ? message.status : 'Waiting...'}</span> </p>
                  <p className="message-context">{message.message}</p>
                </div>
              </div>
            </li>
          )      
      })}
    </ul>
  )
}

export default StudentMessageList;