import React, { Component } from 'react'
import { withTracker } from 'meteor/react-meteor-data'

import { Students } from '../../../api/student'
import { Attendance } from '../../../api/attendance'

import { DashTime } from '../../components/Time'
import TeacherDashboard from '../../components/Teacher/TeacherDashboard'
import { StudentDashboard } from '../../components/Student'
import moment from 'moment'

class Dashboard extends Component {
  state={
    studentAttendance:[]
  }
  handleClick= (e,id) => {
    let { studentAttendance } = this.state
    studentIndex = studentAttendance.findIndex(i => i.id === id);

    if(studentIndex >=0){
      studentAttendance[studentIndex].status = e.target.value
    }else{
      studentAttendance.push({
        id:id,
        status:e.target.value
      })
    }
    this.setState({
      studentAttendance
    })
  }
  submitAttendance = () => {
    console.log("submit");
    const { studentAttendance } = this.state
    Meteor.call('attendance.submitAttendance',studentAttendance);
  }
  updateAttendace = () => {
    console.log('update');
    const { studentAttendance } = this.state
    Meteor.call('attendance.updateAttendance',studentAttendance);
  }
  getAttendance(allAttendance, allStudents){
    if(allAttendance.length>0){
      return data = allStudents.map((student)=>{
        return{
          ...student,
          status: allAttendance[0].students.find(studentAtt =>{
            if(student._id === studentAtt.id){
              return studentAtt.status
            }
          })
        }
      })
    }else{
      return data = allStudents.map((student)=>{
        return {
          ...student,
          status:{
            id:student._id,
            status:null
          }
        }
      })
    }
  }
  render() {
    const data=[{id:'1', fullname:'John Smith'}]
    const { allAttendance, allStudents } = this.props;
    const studentInfo = allStudents.find(student =>{
      if(student._id === "KTrQvouRo9dPMyDQR"){
        return student
      }
    })
    let studentAttendace =[]
    studentAttendace = this.getAttendance(allAttendance, allStudents)
    return (
      <section>
        <DashTime />
        {/*studentInfo?<StudentDashboard studentInfo={studentInfo} />:false*/}
        <TeacherDashboard handleClick={this.handleClick} submitAttendance={this.submitAttendance} updateAttendace={this.updateAttendace} allAttendance={studentAttendace} attendanceSubmitted={allAttendance.length>0?true:false}/>
      </section>
    )
  }
}


export default withTracker(() => {
  Meteor.subscribe('student')
  Meteor.subscribe('attendance')
  return {
    allStudents: Students.find({}).fetch(),
    allAttendance: Attendance.find({date:`${moment().format('DD-MM-YYYY')}`}).fetch()
  }
})(Dashboard)
