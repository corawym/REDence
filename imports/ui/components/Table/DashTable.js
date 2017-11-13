import React from 'react';
import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
  // RadioButton, 
  // RadioButtonGroup
} from 'material-ui/Table';



const styles = {
  style: {
    fontFamily:'"Ubuntu", sans-serif',
    color:'#969696'
  },
  bodyStyle: {
    marginBottom:'24px'
  },
  trStyle: {
    border:'none'
  },
  thStyle: { 
    border:'none'
  },
  tdStyle: {
    fontSize:'14px'
  },
  tdLeftStyle: {
    fontSize:'14px',
    paddingLeft:'0'
  }
}

const DashTable = ({ tableHeaderColumn, allAttendance, handleClick }) => {
  return (
    <Table allRowsSelected={false} bodyStyle={styles.bodyStyle} style={styles.style}>
      <TableHeader displaySelectAll={false} adjustForCheckbox={false} style={{border:'none'}}>
        <TableRow style={styles.trStyle}>
          {tableHeaderColumn.map((headerName,index)=>{
            return <TableHeaderColumn key={index} >{headerName}</TableHeaderColumn>
          })}
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false} showRowHover={true}>
        {allAttendance.map((student) => {
          const allMissedAtt = student.missedDates.length + (student.lateDates.length/2)
          const totalAtt =  ((student.total - allMissedAtt) / student.total) * 100
          return(
            <TableRow selectable={false} key={student._id} style={styles.trStyle}>
              <TableRowColumn style={styles.tdLeftStyle}>{student.fullName}</TableRowColumn>


              <TableRowColumn style={styles.tdStyle}><input type="radio" value="attend" name={`group-${student._id}`} onClick={(e) => handleClick(e, student._id)} defaultChecked={student.status.status === 'attend'}/> </TableRowColumn>
              <TableRowColumn style={styles.tdStyle}><input type="radio" value="late" name={`group-${student._id}`} onClick={(e) => handleClick(e, student._id)} defaultChecked={student.status.status === 'late'}/></TableRowColumn>
              <TableRowColumn style={styles.tdStyle}><input type="radio" value="absent" name={`group-${student._id}`} onClick={(e) => handleClick(e, student._id)} defaultChecked={student.status.status === 'absent'}/></TableRowColumn>
              <TableRowColumn style={styles.tdStyle}><input type="radio" value="exception" name={`group-${student._id}`} onClick={(e) => handleClick(e, student._id)} defaultChecked={student.status.status === 'exception'}/></TableRowColumn>


              <TableRowColumn style={styles.tdStyle}>{totalAtt.toFixed(2)}</TableRowColumn>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}

export default DashTable