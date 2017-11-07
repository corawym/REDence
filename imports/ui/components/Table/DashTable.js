import React from 'react';
import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const DashTable = ({ tableHeaderColumn, allAttendance, handleClick }) => {
  console.log(allAttendance);
  return (
    <Table allRowsSelected={false}>
      <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
        <TableRow>
          {
            tableHeaderColumn.map((headerName,index)=>{
              return <TableHeaderColumn key={index}>{headerName}</TableHeaderColumn>
            })
          }
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
          {allAttendance.map((student) => {
            const allMissedAtt = student.missedDates.length + (student.lateDates.length/2)
            const totalAtt =  ((student.total - allMissedAtt) / student.total) * 100
            return(
              <TableRow selectable={false} key={student._id}>
                  <TableRowColumn>{student.fullName}</TableRowColumn>
                    <TableRowColumn>{student.status.status?<input type="radio" value="attend" name={`group-${student._id}`} onClick={(e) => handleClick(e, student._id)} checked={student.status.status === 'attend'} readOnly={student.status.status === 'attend' ? true:false}/> : <input type="radio" value="attend" name={`group-${student._id}`} onClick={(e) => handleClick(e, student._id)} />}</TableRowColumn>
                    <TableRowColumn>{student.status.status?<input type="radio" value="late" name={`group-${student._id}`} onClick={(e) => handleClick(e, student._id)} checked={student.status.status === 'late'} readOnly={student.status.status === 'late'? true:false}/>: <input type="radio" value="late" name={`group-${student._id}`} onClick={(e) => handleClick(e, student._id)} />}</TableRowColumn>
                    <TableRowColumn>{student.status.status?<input type="radio" value="absent" name={`group-${student._id}`} onClick={(e) => handleClick(e, student._id)} checked={student.status.status === 'absent'} readOnly={student.status.status === 'absent'? true:false}/> : <input type="radio" value="absent" name={`group-${student._id}`} onClick={(e) => handleClick(e, student._id)}/>}</TableRowColumn>
                    <TableRowColumn>{student.status.status?<input type="radio" value="exception" name={`group-${student._id}`} onClick={(e) => handleClick(e, student._id)} checked={student.status.status === 'exception'} readOnly={student.status.status === 'exception'? true:false}/> : <input type="radio" value="exception" name={`group-${student._id}`} onClick={(e) => handleClick(e, student._id)}/>}</TableRowColumn>
                  <TableRowColumn>{totalAtt.toFixed(2)}</TableRowColumn>
              </TableRow>
            )
          })}
      </TableBody>
    </Table>
  )
};

export default DashTable;