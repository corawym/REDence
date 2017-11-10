import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { withTracker } from 'meteor/react-meteor-data'
import moment from 'moment'

import { Students } from '../../../api/student'
import { Attendance } from '../../../api/attendance'
import { Messages } from '../../../api/messages'

import { HeaderContainer } from '../HeaderContainer'
import { DashTime } from '../../components/Time'
import { TeacherDashboard } from '../../components/Teacher'
import { StudentDashboard } from '../../components/Student'

import './styles.css'

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
  updateAttendance = () => {
    console.log('update');
    const { studentAttendance } = this.state
    const { allAttendance } = this.props
    studentAttendance.forEach(attendance => {
      allAttendance[0].students.forEach(students => {
        if(attendance.id === students.id){
          students.status = attendance.status
        }
      })
    });
    Meteor.call('attendance.updateAttendance',allAttendance[0].students, this.props.allStudents);
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
  getTotalAttendancePercent(studentInfo){
    if(studentInfo){
      const totalAttendance = studentInfo.total - studentInfo.missedDates.length - (studentInfo.lateDates.length/2)
      const totalAttendancePercent = Math.round(totalAttendance / studentInfo.total * 100)
      return totalAttendancePercent
    }
  }

  logout(){
    Meteor.logout()
  }

  render() {
    const { allAttendance, allStudents, userInfo, currentUserId, allMessages } = this.props
    let studentAttendance =[]
    let studentInfo = null
    if(userInfo){
      studentInfo = allStudents.find(student =>{
        if(student.email === userInfo.emails[0].address){
          return student
        }
      })
    }

    const totalAttendancePercent = this.getTotalAttendancePercent(studentInfo)

    studentAttendance = this.getAttendance(allAttendance, allStudents)

    let DashboardWithRole = null
    let userFullName = null
    if(currentUserId){
      if(userInfo){
        if(userInfo.profile.role === "teacher"){
          DashboardWithRole = <TeacherDashboard handleClick={this.handleClick} submitAttendance={this.submitAttendance} updateAttendance={this.updateAttendance} allAttendance={studentAttendance} attendanceSubmitted={allAttendance.length>0?true:false}/>
          userFullName = userInfo.profile.fullName
        } else {
          DashboardWithRole = <StudentDashboard studentInfo={studentInfo} totalAttendancePercent={totalAttendancePercent} allMessages={allMessages}/>
          userFullName = userInfo.profile.fullName
        }
      }
    } else {
      return <Redirect to='/login' />
    }

    
    return (

      <div>
        <HeaderContainer logOut={this.logout} userFullName={userFullName}/>
        <section className="dashboard">
          <DashTime />
          {DashboardWithRole}
        </section>
      </div>

    )
  }
}

export default withTracker(() => {
  Meteor.subscribe('student')
  Meteor.subscribe('attendance')
  Meteor.subscribe('messages')
  let studentInfo = null
  if(Meteor.user() && Students.find({}).fetch().length>0){
    studentInfo = Students.find({}).fetch().find(student =>{
      if(student.email === Meteor.user().emails[0].address){
        return student
      }
    })
  }
  return {
    allStudents: Students.find({}).fetch(),
    allAttendance: Attendance.find({date:`${moment().format('DD-MM-YYYY')}`}).fetch(),
    currentUserId: Meteor.userId(),
    userInfo: Meteor.user(),
    
    allMessages:Messages.find({ sender: { $elemMatch: { _id: `${studentInfo?studentInfo._id:''}`} } }).fetch()
  }
})(Dashboard)

