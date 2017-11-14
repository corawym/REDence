import React from 'react'
import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table'
import moment from 'moment'


const styles = {
  style: {
    fontFamily:'"Ubuntu", sans-serif',
    color:'#969696'
  },
  bodyStyle: {
    marginBottom:'50px'
  },
  trStyle: {
    border:'none'
  },
  thStyle: {
    border:'none'
  },
  thcStyle: {
    fontSize:'16px'
  },
  tdStyle: {
    fontSize:'14px'
  }
}

const AttendanceList = ({missedDates, lateDates, sickDates}) => {
  return(
    <Table allRowsSelected={false} bodyStyle={styles.bodyStyle} style={styles.style}>
      <TableHeader displaySelectAll={false} adjustForCheckbox={false} style={{border:'none'}}>
        <TableRow style={styles.trStyle}>
          <TableHeaderColumn></TableHeaderColumn>
          <TableHeaderColumn style={styles.thcStyle}>Status</TableHeaderColumn> 
          <TableHeaderColumn style={styles.thcStyle}>Date</TableHeaderColumn> 
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false} showRowHover={true}>
          {
            missedDates.map((dates,index) => {
              return(
                <TableRow selectable={false} key={index} style={styles.trStyle}>
                  <TableRowColumn>{index+1}</TableRowColumn>
                  <TableRowColumn style={styles.tdStyle}>Absent</TableRowColumn>
                  <TableRowColumn style={styles.tdStyle}>{moment(dates,"DD-MM-YYYY").format('LL')}</TableRowColumn>
                </TableRow>
              )
            })
          }
          {
            lateDates.map((dates,index) => {
              return(
                <TableRow selectable={false} key={index} style={styles.trStyle}>
                  <TableRowColumn>{missedDates.length+index+1}</TableRowColumn>
                  <TableRowColumn style={styles.tdStyle}>Late</TableRowColumn>
                  <TableRowColumn style={styles.tdStyle}>{moment(dates,"DD-MM-YYYY").format('LL')}</TableRowColumn>
                </TableRow>
              )
            })
          }
          {
            sickDates.map((dates,index) => {
              return(
                <TableRow selectable={false} key={index}>
                  <TableRowColumn>{lateDates.length+missedDates.length+index+1}</TableRowColumn>
                  <TableRowColumn style={styles.tdStyle}>Exception</TableRowColumn>
                  <TableRowColumn style={styles.tdStyle}>{moment(dates,"DD-MM-YYYY").format('LL')}</TableRowColumn>
                </TableRow>
              )
            })
          }
      </TableBody>
    </Table>
  )
}

export default AttendanceList;