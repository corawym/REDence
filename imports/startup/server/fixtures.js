import { Meteor } from 'meteor/meteor'
import { Programs } from '../../api/program'
import { Teachers } from '../../api/teacher'
import { Students } from '../../api/student'
import { Messages } from '../../api/messages'
import { Attendance } from '../../api/attendance'

import { Accounts } from 'meteor/accounts-base'
import moment from 'moment'

Meteor.startup(() => {
  let user = {}
  let student1=''
  let student2=''
  let student3=''
  let program1=''
  let teacher1=''

  if (Programs.find().count() === 0){

    program1 = Programs.insert({ 
      title: "Web Dev"
    })

     Programs.insert({ 
      title: "App Dev"
    })

     Programs.insert({ 
      title: "UX Design"
    })

     Programs.insert({ 
      title: "UI Design"
    })

     Programs.insert({ 
      title: "Digital Marketing"
    })
  }

  if (Teachers.find().count() === 0 ){

    Teachers.insert({
      fullName: 'Mackenzie Keiran',
      email: 'mack@email.com',
      role: 'teacher',
      programs: Programs.find({ $or: [{title: 'Web Dev'}, {title: 'App Dev'} ]}).fetch()
    })

     teacher1 = Teachers.insert({
      fullName: 'Mandi Wise',
      email: 'mandi@email.com',
      role: 'teacher',
      programs: Programs.find({ $or: [{title: 'Web Dev'}, {title: 'App Dev'} ]}).fetch()
    })

    const teacher1Info= Teachers.find({_id:`${teacher1}`}, {_id:0, email:1}).fetch()

    if(teacher1Info){
      Accounts.createUser({
        email: teacher1Info[0].email,
        password: 'pass',
        profile: {
          fullName: `${teacher1Info[0].fullName}`,        
          role: 'teacher'
        }
      });
    }else{
      console.log('fail');
    }
  } 

  if(Students.find().count() === 0){

    student1 = Students.insert({
      fullName: 'Bobby Soetarty',
      program: Programs.find({ title: 'App Dev' }).fetch(),
      email: 'bobby@email.com',
      role: 'student',
      missedDates: ['03-11-2017','01-11-2017','25-10-2017','26-10-2017'],
      lateDates: ['06-10-2017','10-10-2017'],
      sickDates: ['11-10-2017','19-10-2017'],
      total: 90
    })

    const student1Info= Students.find({_id:`${student1}`}, {_id:0, email:1}).fetch()

    if(student1Info){
      Accounts.createUser({
        email: student1Info[0].email,
        password: 'pass',
        profile: {
          fullName: `${student1Info[0].fullName}`,        
          role: 'student'
        }
      });
    }else{
      console.log('fail');
    }


    student2 = Students.insert({
      fullName: 'Cora Wongy',
      program: Programs.find({ title: 'App Dev' }).fetch(),
      email: 'cora@email.com',
      role: 'student',
      missedDates: ['02-11-2017','07-10-2017'],
      lateDates: ['09-10-2017','11-10-2017','12-10-2017','26-10-2017'],
      sickDates: ['19-10-2017'],
      total: 90
    })

    const student2Info= Students.find({_id:`${student2}`}, {_id:0, email:1}).fetch()
    
    if(student2Info){
      Accounts.createUser({
        email: student2Info[0].email,
        password: 'pass',
        profile: {
          fullName: `${student2Info[0].fullName}`,        
          role: 'student'
        }
      });
    }else{
      console.log('fail');
    }

    student3= Students.insert({
      fullName: 'Mark Cooly',
      program: Programs.find({ title: 'App Dev' }).fetch(),
      email: 'mark@email.com',
      role: 'student',
      missedDates: ['01-11-2017'],
      lateDates: ['04-10-2017','16-10-2017'],
      sickDates: ['08-10-2017','15-10-2017','21-10-2017','25-10-2017','26-10-2017'],
      total: 90
    })
  }
  

  if(Messages.find().count() === 0 ){

    Messages.insert({
      message: 'I will be late for 10 minutes because of the traffic.',
      subject:'Will be late',
      sender: Students.find({ email: 'bobby@email.com' }).fetch(),
      receiver: Teachers.find({ programs: { $elemMatch: { title: 'App Dev' } } }).fetch(),
      dateSent:moment().format(),
      status:null
    })

    Messages.insert({
      message: 'I am unable to attend class on December 1, 2017 due to family illness.',
      subject:'Absence Excuse',
      sender: Students.find({ email: 'cora@email.com' }).fetch(),
      receiver: Teachers.find({ programs: { $elemMatch: { title: 'App Dev' } } }).fetch(),
      dateSent:moment().format(),
      status:null
    })

    Messages.insert({
      message: 'I needed to have my leg set after an injury in my baseball game the previous night. I will show you the documentation from the pediatric orthopedist.',
      subject:'Leg injury',
      sender: Students.find({ email: 'mark@email.com' }).fetch(),
      receiver: Teachers.find({ programs: { $elemMatch: { title: 'App Dev' } } }).fetch(),
      dateSent:moment().format(),
      status:null
    })

  }
  if(Attendance.find().count() === 0){
    Attendance.insert({
      date: moment().add(-1, 'days').format('DD-MM-YYYY'),
      program: program1,
      students:[
        {
          id: student1,
          status:'attend'
        },
        {
          id:student2,
          status:'late'
        },
        {
          id:student3,
          status:'absent'
        }
      ]
    })
  }
})
