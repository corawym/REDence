import React from 'react'
import { RaisedButton, Divider, FlatButton } from 'material-ui'

import MarkAttendanceIcon from 'material-ui/svg-icons/action/alarm-on'
import MessageIcon from 'material-ui/svg-icons/communication/email'

import DashTable from '../Table/DashTable'
import TeacherMailList from './TeacherMailList'
import { RegisterContainer } from '../../containers/RegisterContainer'

import './styles.css'

const styles = {
  dividerStyle: {
    margin:'50px 0 50px 0'
  },
  labelStyle: {
    color:'white', 
    fontFamily:'"Ubuntu", sans-serif'
  },
  submitButton: {
    borderRadius:'18px', 
    padding:'0 16px',
    marginBottom:'50px',
    width:'200px'
  }
}

const TeacherDashboard = ({ handleClick, submitAttendance, allAttendance, attendanceSubmitted, updateAttendance,allTeacherMessages, confirmationEmail}) => {
  return (
    <div>
      
      <div className="display-flex">
        <MarkAttendanceIcon color='#e2231a' style={{width:'50px', height:'50px'}}/>
        <h2 className='dashboard-section-name'>Attendance</h2>
      </div>

      <DashTable tableHeaderColumn={['Student','Attend','Late','Absence','Exception','Total']} allAttendance={allAttendance} handleClick={handleClick}/>
      
      <RegisterContainer />

      <div className="position-center">
        <FlatButton 
          label="Submit" 
          labelStyle={styles.labelStyle}
          style={styles.submitButton}
          backgroundColor='#e2231a'
          hoverColor='#313131'
          onClick={attendanceSubmitted ? updateAttendance : submitAttendance}
        />
      </div>
      

      <Divider style={styles.dividerStyle}/>
      <div className="display-flex">
        <MessageIcon color='#e2231a' style={{width:'50px', height:'50px'}}/>
        <h2 className='dashboard-section-name'>Messages</h2>
      </div>

      <TeacherMailList allTeacherMessages={allTeacherMessages} confirmationEmail={confirmationEmail}/>
    </div>
  )
};

export default TeacherDashboard;