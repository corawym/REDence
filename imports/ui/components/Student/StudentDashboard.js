import React from 'react'
import PropTypes from 'prop-types'
import { Avatar } from 'material-ui';

import './styles.css'


const StudentDashboard = ({studentInfo, totalAttendancePercent}) => {
  console.log(studentInfo.fullName[0])
  return(
    <div className="student-info-container">
      <div className="student-info-wrapper">
        <Avatar size={80}>{studentInfo.fullName[0]}</Avatar>
        <div className="student-info-personal">
          <h1>{studentInfo.fullName}</h1>
          <h2>{studentInfo.program[0].title} student<span> (program start date - finish date)</span></h2>
        </div>
      </div>

      <div className="student-stat-wrapper">
        <div>
          <h3>total attendance</h3>
          <p>{totalAttendancePercent}%</p>
          <p>Need over 90% to pass</p>
        </div>
        <div>
          <h3>total school days</h3>
          <p>{studentInfo.total}</p>
        </div>
        <div>
          <h3>absence</h3>
          <p>{studentInfo.missedDates.length}</p>
        </div>
        <div>
          <h3>late</h3>
          <p>{studentInfo.lateDates.length}</p>
        </div>
        <div>
          <h3>exception</h3>
          <p>{studentInfo.sickDays.length}</p>
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