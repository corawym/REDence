import React from 'react'
import PropTypes from 'prop-types'


const StudentDashboard = ({studentInfo, totalAttendancePercent}) => {
  // console.log(studentInfo);
  
  return(
    <div className="student-info-wrapper">
      <div className="student-info-personal">
        <h1>{studentInfo.fullName}</h1>
        <h2>{studentInfo.program[0].title} student<span> (program start date - finish date)</span></h2>
      </div>

      <div className="student-stat-wrapper">
        <div>
          <h3>total attendance</h3>
          <h4>{totalAttendancePercent}</h4>
          <p>Over 90% to pass</p>
        </div>
        <div>
          <h3>total school days</h3>
          <h4>{studentInfo.total}</h4>
        </div>
        <div>
          <h3>absence</h3>
          <h4>{studentInfo.missedDates.length}</h4>
        </div>
        <div>
          <h3>late</h3>
          <h4>{studentInfo.lateDates.length}</h4>
        </div>
        <div>
          <h3>exception</h3>
          <h4>{studentInfo.sickDays.length}</h4>
        </div>
      </div>
      
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