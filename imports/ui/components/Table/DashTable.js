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
                    <TableRowColumn><input type="radio" value="attend" name={`group-${student._id}`} onClick={(e) => handleClick(e, student._id)} defaultChecked={student.status.status === 'attend'}/> </TableRowColumn>
                    <TableRowColumn><input type="radio" value="late" name={`group-${student._id}`} onClick={(e) => handleClick(e, student._id)} defaultChecked={student.status.status === 'late'}/></TableRowColumn>
                    <TableRowColumn><input type="radio" value="absent" name={`group-${student._id}`} onClick={(e) => handleClick(e, student._id)} defaultChecked={student.status.status === 'absent'}/></TableRowColumn>
                    <TableRowColumn><input type="radio" value="exception" name={`group-${student._id}`} onClick={(e) => handleClick(e, student._id)} defaultChecked={student.status.status === 'exception'}/></TableRowColumn>
                  <TableRowColumn>{totalAtt.toFixed(2)}</TableRowColumn>
              </TableRow>
            )
          })}
      </TableBody>
    </Table>
  )
};

export default DashTable;