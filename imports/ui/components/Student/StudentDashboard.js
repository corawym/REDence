import React from 'react'

const StudentDashboard = ({studentInfo}) => {
  // console.log(studentInfo);
  return(
    <div>
      <h1>{studentInfo.fullName}</h1>
      <h2>program student<span>(program start date - finish date)</span></h2>
    </div>
  )
}

export default StudentDashboard