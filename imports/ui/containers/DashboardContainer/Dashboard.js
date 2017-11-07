import React, { Component } from 'react'
import TeacherDashboard from '../../components/Teacher/TeacherDashboard'
import { StudentDashboard } from '../../components/Student'

export default class Dashboard extends Component {
  handleChange(e,id){
    console.log(e.target.value, id)
  }
  submitAttendance(){
    console.log("submit");
  }
  
  render() {
    // const data=[{id:'1', fullname:'John Smith', markedAs:'late'}]
    return (
      <section>
        {/*<TeacherDasboard data={data} handleChange={this.handleChange} submitAttendance={this.submitAttendance}/>*/}
        <StudentDashboard />
      </section>
    )
  }
}
