import { Mongo } from 'meteor/mongo'
import moment from 'moment'

export const Attendance = new Mongo.Collection('attendance')

Meteor.methods({
  'attendance.submitAttendance'(attendance){
    Attendance.insert({
      date : moment().format('DD-MM-YYYY'),
      students: attendance
    })
  },
  'attendance.updateAttendance'(attendance){
    Attendance.update({date: moment().format('DD-MM-YYYY')},{
      $set:{ students: attendance}
    })
  }
})