import { Mongo } from 'meteor/mongo'

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
        program: [{ title: 'App Dev' }]
      }
    })

    Students.insert({
      fullName: fullName,
      program: [{ title: 'App Dev' }],
      email: email,
      role: 'student',
      missedDates: [],
      lateDates: [],
      sickDates: [],
      total: 90
    })
  }
})