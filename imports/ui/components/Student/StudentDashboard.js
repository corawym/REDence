import React from 'react'
import PropTypes from 'prop-types'


const StudentDashboard = ({studentInfo}) => {
  // console.log(studentInfo);
  return(
    <div>
      <h1>{studentInfo.fullName}</h1>
      <h2>{studentInfo.program[0].title} student<span> (program start date - finish date)</span></h2>
    </div>
  )
}

StudentDashboard.propTypes = {
  studentInfo: PropTypes.shape({
    fullName: PropTypes.string.isRequired,
    program: PropTypes.array.isRequired
  })
}

export default StudentDashboard