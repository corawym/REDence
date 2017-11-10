import { Mongo } from 'meteor/mongo'

export const Messages = new Mongo.Collection('messages')

Meteor.methods({
  'message.acceptMessage'(messageId){
    Messages.update({_id: messageId},{
      $set: { status: 'accept' }
    })
  },
  'message.declineMessage'(messageId){
    Messages.update({_id: messageId},{
      $set: { status: 'decline' }
    })
  }
})