import React from 'react';

const StudentMessageList = ({allStudentMessages}) => {
  return(
    <ul>
      {
        allStudentMessages.map(message =>{
          return <li key={message._id}>{message.message}</li>
        })
      }
    </ul>
  )
}

export default StudentMessageList;