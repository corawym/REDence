import React, { Component } from 'react'

import { DashTime } from '../../components/Time'
import TeacherDashboard from '../../components/Teacher/TeacherDashboard'
import { StudentDashboard } from '../../components/Student'

export default class Dashboard extends Component {
  handleClick(e,id){
    console.log(e.target.value, id)
  }
  submitAttendance(){
    console.log("submit");
  }
  
  render() {
    const data=[{id:'1', fullname:'John Smith'}]
    return (
      <section>
        {/*<StudentDashboard />*/}
        <DashTime />
        <TeacherDashboard data={data} handleClick={this.handleClick} submitAttendance={this.submitAttendance}/>
      </section>
    )
  }
}
