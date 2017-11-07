import React from 'react';
import DashTable from '../Table/DashTable';
import RaisedButton from 'material-ui/RaisedButton';
const TeacherDashboard = ({handleClick, submitAttendance, allAttendance}) => {
  return (
    <div>
      <DashTable tableHeaderColumn={['Student','Attend','Late','Absence','Exception','Total']} allAttendance={allAttendance} handleClick={handleClick}/>
      <RaisedButton label="Submit" primary={true} onClick={submitAttendance}/>
    </div>
  )
};

export default TeacherDashboard;