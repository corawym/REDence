import React, { Component } from 'react'
import { withTracker } from 'meteor/react-meteor-data'

import { Students } from '../../../api/student'

import { DashTime } from '../../components/Time'
import TeacherDashboard from '../../components/Teacher/TeacherDashboard'
import { StudentDashboard } from '../../components/Student'

class Dashboard extends Component {
  handleClick(e,id){
    console.log(e.target.value, id)
  }
  submitAttendance(){
    console.log("submit");
  }
  
  render() {
    // const data=[{id:'1', fullname:'John Smith'}]
    // console.log (this.props.students)
    const studentInfo = this.props.students.find(student =>{
      if(student._id === "KTrQvouRo9dPMyDQR"){
        return student
      }
    })
    return (
      <section>
        <StudentDashboard studentInfo={studentInfo} />
        <DashTime />
        {/*<TeacherDashboard data={data} handleClick={this.handleClick} submitAttendance={this.submitAttendance}/>*/}
      </section>
    )
  }
}


export default withTracker(() => {
  Meteor.subscribe('student')
  return {
    students: Students.find({}).fetch()
  }
})(Dashboard)
