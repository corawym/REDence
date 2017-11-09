import React from 'react';

const StudentMessageList = ({allMessages}) => {
  console.log(allMessages);
  return(
    <div>
      <ul>
        {
          allMessages.map(message =>{
            return <li key={message._id}>{message.message}</li>
          })
        }
      </ul>
    </div>
  )
}

export default StudentMessageList;