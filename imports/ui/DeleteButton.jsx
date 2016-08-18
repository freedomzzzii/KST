import {Meteor} from 'meteor/meteor';
import React, {PropTypes} from 'react';

export default class DeleteButton extends React.Component
{
  constructor(props)
  {
    super(props);
    this.handleClickDelete = this.handleClickDelete.bind(this);
  }

  handleClickDelete()
  {
    const {postId} = this.props;
    Meteor.call('removePost', postId);
  }

  render()
  {
    return (
      <button type='button' onClick={this.handleClickDelete}>
        Delete
      </button>
    )
  }
}
DeleteButton.propTypes =
{
  postId: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.object.isRequired,
  ])
}
