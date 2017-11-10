import React from 'react';
import moment from 'moment'

const StudentMessageList = ({allStudentMessages}) => {
  return(
    <ul>
      {
        allStudentMessages.map(message =>{
          return  <li key={message._id}>
                    <p>{moment(message.dateSent).format('LT')}</p>
                    <p>{message.message} <span>{message.status ? message.status : 'Waiting...'}</span></p>
                  </li>
        })
      }
    </ul>
  )
}

export default StudentMessageList;