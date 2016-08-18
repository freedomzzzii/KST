import {Meteor} from 'meteor/meteor';

//Collection
import {Posts} from '../../imports/api/collections/Posts.js';

Meteor.publish('posts.all', () => {
  return Posts.find();
})

Meteor.publish('posts.luvU',() => {
  const findLuvU = {text: 'I Love You'};
  return Posts.find(findLuvU);
})
