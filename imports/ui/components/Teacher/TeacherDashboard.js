import React from 'react';
import DashTable from '../Table/DashTable';
import RaisedButton from 'material-ui/RaisedButton';
import TeacherMailList from './TeacherMailList';

const TeacherDashboard = ({ handleClick, submitAttendance, allAttendance, attendanceSubmitted, updateAttendance,allTeacherMessages, confirmationEmail }) => {
  return (
    <div>
      <DashTable tableHeaderColumn={['Student','Attend','Late','Absence','Exception','Total']} allAttendance={allAttendance} handleClick={handleClick}/>
      <RaisedButton label="Submit" primary={true} onClick={attendanceSubmitted ? updateAttendance : submitAttendance}/>
      <TeacherMailList allTeacherMessages={allTeacherMessages} confirmationEmail={confirmationEmail}/>
    </div>
  )
};

export default TeacherDashboard;