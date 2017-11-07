import React, { Component } from 'react'
import TeacherDasboard from '../../components/Teacher/TeacherDashboard'
import moment from 'moment';

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
        <div>
          <p>09:00 am</p>
          <p>{moment().isoWeekday() === 6 || moment().isoWeekday() === 7 ? moment().day(1).format('ddd, D MMM YYYY'): moment().format('ddd, D MMM YYYY')}</p>
          <p>{moment().isoWeekday() === 6 || moment().isoWeekday() === 7 ? moment().day(1).fromNow(): "Today"}</p>
        </div>
        <TeacherDasboard data={data} handleClick={this.handleClick} submitAttendance={this.submitAttendance}/>
      </section>
    )
  }
}
