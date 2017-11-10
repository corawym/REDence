import React from 'react';

const StudentMessageList = ({allMessages}) => {
  return(
    <ul>
      {
        allMessages.map(message =>{
          return <li key={message._id}>{message.message}</li>
        })
      }
    </ul>
  )
}

export default StudentMessageList;