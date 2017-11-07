import React from 'react';
import DashTable from '../Table/DashTable';
import RaisedButton from 'material-ui/RaisedButton';
const TeacherDashboard = ({data, handleClick, submitAttendance}) => {
  return (
    <div>
      <DashTable tableHeaderColumn={['Student','Attend','Late','Absence','Exception','Note','Total']} data={data} handleClick={handleClick}/>
      <RaisedButton label="Submit" primary={true} onClick={submitAttendance}/>
    </div>
  )
};

export default TeacherDashboard;