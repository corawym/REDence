import React from 'react'

const TeacherMailList = ({allTeacherMessages}) => {
  return (
    <ul>
      {
        allTeacherMessages.map(message =>{
          return <li key={message._id}>{message.message}</li>
        })
      }
    </ul>
  )
}

export default TeacherMailList;