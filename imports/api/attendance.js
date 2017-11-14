import { Mongo } from 'meteor/mongo'
import moment from 'moment'
import { Students } from './student'

export const Attendance = new Mongo.Collection('attendance')

Meteor.methods({
  'attendance.submitAttendance'(attendance){
    Attendance.insert({
      date : moment().format('DD-MM-YYYY'),
      students: attendance
    })
    attendance.forEach(element => {
      if(element.status === 'late'){
        Students.update({_id: element.id},{
          $push: { lateDates: moment().format('DD-MM-YYYY') }
        })
      }else if(element.status === 'absent'){
        Students.update({_id: element.id},{
          $push: { missedDates: moment().format('DD-MM-YYYY') }
        })
        
      }else if(element.status === 'exception'){
        Students.update({_id: element.id},{
          $push: { sickDates: moment().format('DD-MM-YYYY') }
        })
      }
    });
  },
  'attendance.updateAttendance'(attendance, allStudents){
    allStudents.forEach(element => {
      if(element.missedDates.includes(`${moment().format('DD-MM-YYYY')}`)){
        element.missedDates.pop();
        Students.update({_id: element._id},{
          $set:{ missedDates: element.missedDates}
        })
      }else if(element.sickDates.includes(`${moment().format('DD-MM-YYYY')}`)){
        element.sickDates.pop();
        Students.update({_id: element._id},{
          $set:{ sickDates: element.sickDates}
        })
      }else if(element.lateDates.includes(`${moment().format('DD-MM-YYYY')}`)){
        element.lateDates.pop();
        Students.update({_id: element._id},{
          $set:{ lateDates: element.lateDates}
        })
      }
    })
    Attendance.update({date: moment().format('DD-MM-YYYY')},{
      $set:{ students: attendance}
    })
    attendance.forEach(element => {
      if(element.status === 'late'){
        Students.update({_id: element.id},{
          $push: { lateDates: moment().format('DD-MM-YYYY') }
        })
      }else if(element.status === 'absent'){
        Students.update({_id: element.id},{
          $push: { missedDates: moment().format('DD-MM-YYYY') }
        })
        
      }else if(element.status === 'exception'){
        Students.update({_id: element.id},{
          $push: { sickDates: moment().format('DD-MM-YYYY') }
        })
      }
    });
  }
})