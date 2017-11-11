import React from 'react'
import PropTypes from 'prop-types'
import StudentMessageList from './StudentMessageList'
import AttendanceList from './AttendanceList'
import { Avatar, CircularProgress, Divider } from 'material-ui'
import AttendanceIcon from 'material-ui/svg-icons/action/dns'
import MessageIcon from 'material-ui/svg-icons/communication/email'

import { MessageContainer } from '../../containers/MessageContainer'

import './styles.css'

const style = {
  border: '3px solid pink',
  position: 'fixed',
  bottom: '30px',
  right: '30px'
}

const StudentDashboard = ({studentInfo, totalAttendancePercent, allStudentMessages}) => {
  let progressColor = null
  if(totalAttendancePercent === 100){
    progressColor = 'green'
  } else if(totalAttendancePercent >= 97){
    progressColor = 'yellow'
  } else if(totalAttendancePercent >= 94){
    progressColor = 'orange'
  } else if(totalAttendancePercent >= 90){
    progressColor = 'red'
  } else if(totalAttendancePercent < 90){
    progressColor = 'black'
  } 
  return(
    <div className="student-info-container">
      <div className="student-info-wrapper display-flex">
        <Avatar size={70} backgroundColor='#e2231a'>{studentInfo.fullName[0]}</Avatar>
        <div className="student-info-personal">
          <h1>{studentInfo.fullName}</h1>
          <h2>{studentInfo.program[0].title} student<span> (program start date - finish date)</span></h2>      
        </div>
      </div>

      <div className="student-stat-overview display-flex">
        <CircularProgress
          mode="determinate"
          value={totalAttendancePercent} 
          size={230}
          thickness={10}
          className="overview-progress-wrapper"
          color={progressColor}
        />
        <div className="overview-wrapper text-center">
          
          <h3>Total attendance</h3>
          <p className="student-stat-subtitle">Need over 90% to pass</p>
          <p className="student-overview-num">{totalAttendancePercent}%</p>
        </div>
      </div>

      <div className="student-stat-wrapper display-flex">
        <div className="flex-basis-25 text-center">
          <h3>Current week</h3>
          <p className="student-stat-subtitle">Total 12 weeks</p>
          <p className="student-stat-num">5</p>
        </div>
        <div className="flex-basis-25 text-center">
          <h3>Absent</h3>
          <p className="student-stat-subtitle">Total absent days</p>
          <p className="student-stat-num">{studentInfo.missedDates.length}</p> 
        </div>
        <div className="flex-basis-25 text-center">
          <h3>Late</h3>
          <p className="student-stat-subtitle">2 lates = 1 absent</p>
          <p className="student-stat-num">{studentInfo.lateDates.length}</p>
        </div>
        <div className="flex-basis-25 text-center">
          <h3>Exception</h3>
          <p className="student-stat-subtitle">Not counted</p>
          <p className="student-stat-num">{studentInfo.sickDates.length}</p>
        </div>
      </div>

      <Divider style={{margin:'50px 0 30px 0'}}/>
      <div className="display-flex">
        <AttendanceIcon color='#e2231a' style={{width:'50px', height:'50px'}}/>
        <h2 className='dashboard-section-name'>Attendance details</h2>
      </div>
      
      <AttendanceList missedDates={studentInfo.missedDates} lateDates={studentInfo.lateDates} sickDates={studentInfo.sickDates} />

      <Divider style={{margin:'50px 0 30px 0'}}/>
      <div className="display-flex">
        <MessageIcon color='#e2231a' style={{width:'50px', height:'50px'}}/>
        <h2 className='dashboard-section-name'>Messages</h2>
      </div>

      <StudentMessageList allStudentMessages={allStudentMessages}/>

      <MessageContainer style={style} studentInfo={studentInfo}/>
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