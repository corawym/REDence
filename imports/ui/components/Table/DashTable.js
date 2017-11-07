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

const DashTable = ({ tableHeaderColumn, data, handleClick }) => {
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
          {data.map((student) => {
            return(
              <TableRow selectable={false} key={student.id}>
                  <TableRowColumn>{student.fullname}</TableRowColumn>
                    <TableRowColumn><input type="radio" value="attend" name={`group-${student.id}`} onClick={(e) => handleClick(e, student.id)}/></TableRowColumn>
                    <TableRowColumn><input type="radio" value="late" name={`group-${student.id}`} onClick={(e) => handleClick(e, student.id)}/></TableRowColumn>
                    <TableRowColumn><input type="radio" value="absence" name={`group-${student.id}`} onClick={(e) => handleClick(e, student.id)}/></TableRowColumn>
                    <TableRowColumn><input type="radio" value="exception" name={`group-${student.id}`} onClick={(e) => handleClick(e, student.id)}/></TableRowColumn>
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