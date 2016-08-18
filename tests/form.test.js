import {Meteor} from 'meteor/meteor';
import {resetDatabase} from 'meteor/xolvio:cleaner';

//Collection
import {Posts} from '../api/colections/Posts.js';

describe('My Form Test', function()
{
  beforeEach(function(done) {
    resetDatabase();
  });

  it('Should be tested', function() {
      const testData = {
        name: 'Jessica',
        text: 'TEST',
        active: false,
      }
      Meteor.call('insertPost', testData)
  })
});
