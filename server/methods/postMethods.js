import { Meteor } from 'meteor/meteor';

// Collections
import { Posts } from '../../imports/api/collections/Posts.js';

Meteor.methods({
  updatePostActive({ postId, active}) {
    const byPostId = { _id: postId };
    Posts.update(byPostId, {
      $set: {
        active: !active
      }
    });
  },

  insertPost({name, text, active}) {
    Posts.insert({name, text, active});
  },

  removePost(postId)
  {
    const byPostId = { _id: postId };
    Posts.remove(byPostId);
  }
});
