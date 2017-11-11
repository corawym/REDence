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

const AttendanceList = ({missedDates, lateDates, sickDates}) => {
  return(
    <Table allRowsSelected={false} bodyStyle={{marginBottom:'50px'}}>
      <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
        <TableRow>
          <TableHeaderColumn></TableHeaderColumn> 
          <TableHeaderColumn>Date</TableHeaderColumn> 
          <TableHeaderColumn>Status</TableHeaderColumn> 
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
          {
            missedDates.map((dates,index) => {
              return(
                <TableRow selectable={false} key={index}>
                  <TableRowColumn>{index+1}</TableRowColumn>
                  <TableRowColumn>{dates}</TableRowColumn>
                  <TableRowColumn>Absent</TableRowColumn>
                </TableRow>
              )
            })
          }
          {
            lateDates.map((dates,index) => {
              return(
                <TableRow selectable={false} key={index}>
                  <TableRowColumn>{missedDates.length+index+1}</TableRowColumn>
                  <TableRowColumn>{dates}</TableRowColumn>
                  <TableRowColumn>Late</TableRowColumn>
                </TableRow>
              )
            })
          }
          {
            sickDates.map((dates,index) => {
              return(
                <TableRow selectable={false} key={index}>
                  <TableRowColumn>{lateDates.length+missedDates.length+index+1}</TableRowColumn>
                  <TableRowColumn>{dates}</TableRowColumn>
                  <TableRowColumn>Exception</TableRowColumn>
                </TableRow>
              )
            })
          }
      </TableBody>
    </Table>
  )
}

export default AttendanceList;