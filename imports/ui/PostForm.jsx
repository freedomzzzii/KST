import {Meteor} from 'meteor/meteor';
import React from 'react';

export default class PostForm extends React.Component
{
  constructor()
  {
    super();
    this.handleClickPost = this.handleClickPost.bind(this);
  }

  handleClickPost()
  {
    const { name, text } = this.refs
    const postObj = {
      name: name.value,
      text: text.value,
      active: false
    }
    Meteor.call('insertPost', postObj);
  }

  render()
  {
    return (
      <section>
        <form id='postForm'>
          <label htmlFor="postText">Post Text</label>
          <input ref='text' name='postText' type="text"/>
          <label htmlFor="ownerName">Owner Name</label>
          <input ref='name' name='ownerName' type="text"/>
          <button type='button' onClick={this.handleClickPost}>
            Post
          </button>
        </form>
      </section>
    )
  }
}
