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
            return(
              <TableRow selectable={false} key={student._id}>
                  <TableRowColumn>{student.fullName}</TableRowColumn>
                    <TableRowColumn><input type="radio" value="attend" name={`group-${student._id}`} onClick={(e) => handleClick(e, student._id)} checked={student.status.status === 'attend'} readOnly={student.status.status === 'attend' ? true:false}/></TableRowColumn>
                    <TableRowColumn><input type="radio" value="late" name={`group-${student._id}`} onClick={(e) => handleClick(e, student._id)} checked={student.status.status === 'late'} readOnly={student.status.status === 'late'? true:false}/></TableRowColumn>
                    <TableRowColumn><input type="radio" value="absent" name={`group-${student._id}`} onClick={(e) => handleClick(e, student._id)} checked={student.status.status === 'absent'} readOnly={student.status.status === 'absent'? true:false}/></TableRowColumn>
                    <TableRowColumn><input type="radio" value="exception" name={`group-${student._id}`} onClick={(e) => handleClick(e, student._id)} checked={student.status.status === 'exception'} readOnly={student.status.status === 'exception'? true:false}/></TableRowColumn>
                  <TableRowColumn>Note....</TableRowColumn>
                  <TableRowColumn>90%</TableRowColumn>
              </TableRow>
            )
          })}
      </TableBody>
    </Table>
  )
};

export default DashTable;