import React from 'react'
import { FlatButton, Avatar } from 'material-ui'
import moment from 'moment'

import './styles.css'

const styles = {
  style: {
    fontFamily:'"Ubuntu", sans-serif',
    borderRadius:'18px', 
    marginLeft:'10px',
    fontSize:'0.7rem',
    height:'30px',
    lineHeight:'1rem'
  }
}

const TeacherMailList = ({allTeacherMessages, confirmationEmail}) => {
  return (
    <ul className="dashboard-student-message">
      {allTeacherMessages.map(message =>{
        return(
          <li key={message._id}>
            <div className="display-flex dashboard-message-container">
              <Avatar size={50} backgroundColor='#969696' className='message-avatar'>{message.sender[0].fullName[0]}</Avatar>
              <div>
                <p className="message-name">
                  {message.sender[0].fullName} 
                  <span className="message-time-lighter">{moment(message.dateSent).format('LLL')}</span>
                  <span className="message-status-darker">

                    {message.status ? message.status : 
                      <span className="message-buttons">
                        <FlatButton 
                          label="Approve" 
                          backgroundColor='#e2e2e2' 
                          hoverColor="#969696"
                          style={styles.style} 
                          onClick={(e) => confirmationEmail(e,message._id,'accept')}
                        /> 
                        <FlatButton 
                          label="Decline" 
                          backgroundColor='#e2e2e2' 
                          hoverColor="#969696"
                          style={styles.style} 
                          onClick={(e) => confirmationEmail(e,message._id,'decline')}
                        />
                      </span>
                    }
                    
                  </span>
                </p>
                <p className="message-context">{message.message} </p> 
              </div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default TeacherMailList;