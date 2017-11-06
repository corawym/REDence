import { Meteor } from 'meteor/meteor'
import { Programs } from '../../api/program'
import { Teachers } from '../../api/teacher'
import { Students } from '../../api/student'
import { Messages } from '../../api/messages'

import { Accounts } from 'meteor/accounts-base'

Meteor.startup(() => {
  let user = {}

  // if( Meteor.users.find().count() == 0 ){
  //   teacher = Accounts.createUser({
  //     email: "hithere@email.com",
  //     password: 'password'
  //   })
  // } else {
  //   user = `${Meteor.users.findOne()._id}`
  // }

  if (Programs.find().count() === 0){

    Programs.insert({ 
      title: "Web Dev"
     })

     Programs.insert({ 
      title: "App Dev"
     })

    //  Programs.insert({ 
    //   title: "UX Design"
    //  })

    //  Programs.insert({ 
    //   title: "UI Design"
    //  })

    //  Programs.insert({ 
    //   title: "Digital Marketing"
    //  })
  }

  if (Teachers.find().count() === 0 ){

    Teachers.insert({
      fullName: 'Mackenzie Keiran',
      email: 'mack@email.com',
      role: 'teacher',
      programs: [
        Programs.find({ title: 'Web Dev', title: 'App Dev' })
      ]
     })

     Teachers.insert({
      fullName: 'Mandi Wise',
      email: 'mandi@email.com',
      role: 'teacher',
      programs: [
        Programs.find({ title: 'Web Dev', title: 'App Dev' })
      ]
     })

    //  Teachers.insert({
    //   fullName: 'Mackenzie Keiran',
    //   email: 'mack@email.com',
    //   role: 'teacher',
    //   programs: [
    //     Programs.find({ title: 'Web Dev', title: 'App Dev' })
    //   ]
    //  })

    //  Teachers.insert({
    //   fullName: 'Mackenzie Keiran',
    //   email: 'mack@email.com',
    //   role: 'teacher',
    //   programs: [
    //     Programs.find({ title: 'Web Dev', title: 'App Dev' })
    //   ]
    //  })
  } 

  if(Students.find().count() === 0){

    Students.insert({
      fullName: 'Bobby Soetarty',
      program: Programs.find({ title: 'App Dev' }),
      email: 'bobby@email.com',
      missedDates: ['03-11-2017', '01-11-2017','26-10-2017'],
      lateDates: ['06-10-2017','10-10-2017'],
      sickDays: ['11-10-2017'],
      total: 90
    })

    Students.insert({
      fullName: 'Cora Wongy',
      program: Programs.find({ title: 'App Dev' }),
      email: 'cora@email.com',
      missedDates: ['02-11-2017', '07-10-2017','25-10-2017'],
      lateDates: ['09-10-2017','11-10-2017'],
      sickDays: ['19-10-2017'],
      total: 90
    })

    Students.insert({
      fullName: 'Mark Cooly',
      program: Programs.find({ title: 'App Dev' }),
      email: 'mark@email.com',
      missedDates: ['01-11-2017', '08-10-2017','21-10-2017'],
      lateDates: ['04-10-2017','16-10-2017'],
      sickDays: ['15-10-2017'],
      total: 90
    })
  }
  

  if(Messages.find().count() === 0 ){

    Messages.insert({
      message: 'BOBBY IS NAT KEEEWL',
      sender: Students.find({ email: 'bobby@email.com' }),
      receiver: [
        Teachers.find({ program: 'App Dev' })
      ]
    })

    Messages.insert({
      message: 'CORA LOOOOVES DOGS',
      sender: Students.find({ email: 'cora@email.com' }),
      receiver: [
        Teachers.find({ program: 'App Dev' })
      ]
    })

    Messages.insert({
      message: 'MARK HAS TOO MANY LATES',
      sender: Students.find({ email: 'mark@email.com' }),
      receiver: [
        Teachers.find({ program: 'App Dev' })
      ]
    })
  }
})