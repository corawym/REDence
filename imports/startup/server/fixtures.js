import { Meteor } from 'meteor/meteor'
import { Programs } from '../../api/program'
import { Accounts } from 'meteor/accounts-base'

// // Meteor.startup(() => {
// //   let user = {}

// //   if( Meteor.users.find().count() == 0 ){
// //     teacher = Accounts.createUser({
// //       email: "hithere@email.com",
// //       password: 'password'
// //     })
// //   } else {
// //     user = `${Meteor.users.findOne()._id}`
// //   }

// //   if (ToDos.find().count() === 0){
// //     ToDos.insert({ 
// //       titlcclassnameclalae: "Learn Meteor",
// //       complete: false,
// //       owner: teacher
// //      })
// //   }
// // })