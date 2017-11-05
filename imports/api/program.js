import { Mongo } from 'meteor/mongo';

export const Programs = new Mongo.Collection('program');


// if ( Meteor.isServer ) {
//   Meteor.publish('todos', function todosPublication() {
//     return ToDos.find({ owner: this.userId })
//   })
// }

// Meteor.methods({
//   'todos.toggleComplete'(todo){

//     if(todo.owner !== this.userId) { 
//       throw new Meteor.Error(
//       'todos.toggleComplete.not-authorized',
//       'you cant update todos for other users'
//       )
//     }
    
//     ToDos.update(todo._id, {
//       $set: { complete: !todo.complete }
//     })
//   },



//   'todos.removeToDo'(todo){

//     if(todo.owner !== this.userId) { 
//       throw new Meteor.Error(
//       'todos.removeToDo.not-authorized',
//       'you cant remove todos for other users'
//       )
//     }

//     ToDos.remove(todo._id)
//   },



//   'todos.removeComplete'(){

//     if(!this.userId) { 
//       throw new Meteor.Error(
//       'todos.removeComplete.not-authorized',
//       'you cant remove completed todos for other users'
//       )
//     }

//     ToDos.remove({ complete: true, owner: this.userId })
//   },




//   'todos.addToDo'(toDoInput) {

//     if(!this.userId) { 
//       throw new Meteor.Error(
//       'todos.addToDo.not-authorized',
//       'you cant add todos for other users'
//       )
//     }

//     ToDos.insert({
//       title: toDoInput,
//       complete: false,
//       owner: this.userId
//     })
//   }

// })