import { Mongo } from 'meteor/mongo'
import { Programs } from './program'

export const Students = new Mongo.Collection('student')

Meteor.methods({
  'student.addStudent'(firstName, lastName, email, fullName){
    Accounts.createUser({
      email: email,
      password: 'pass',
      profile: {
        fullName: fullName,  
        firstName: firstName,
        lastName: lastName,      
        role: 'student',
        program: Programs.find({title:'App Dev'}).fetch()
      }
    })

    Students.insert({
      fullName: fullName,
      program: Programs.find({title:'App Dev'}).fetch(),
      email: email,
      role: 'student',
      missedDates: [],
      lateDates: [],
      sickDates: [],
      total: 90
    })
  }
})