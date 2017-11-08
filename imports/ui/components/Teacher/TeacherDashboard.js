import React from 'react';
import DashTable from '../Table/DashTable';
import RaisedButton from 'material-ui/RaisedButton';
const TeacherDashboard = ({handleClick, submitAttendance, allAttendance, attendanceSubmitted, updateAttendace}) => {
  return (
    <div>
      <DashTable tableHeaderColumn={['Student','Attend','Late','Absence','Exception','Total']} allAttendance={allAttendance} handleClick={handleClick}/>
      <RaisedButton label="Submit" primary={true} onClick={attendanceSubmitted ? updateAttendace : submitAttendance}/>
    </div>
  )
};

export default TeacherDashboard;