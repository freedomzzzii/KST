import {Meteor} from 'meteor/meteor';
import React, {PropTypes} from 'react';
//import ReactTestUtils from 'react-addons-test-utils';

//collection
import {Posts} from '../api/collections/Posts.js';

const inActive = {
  backgroundColor: 'lightblue',
  width: '120px',
  heigth: '60px',
  color: '#FFF',
}

const active = {
  backgroundColor: 'lightpink',
  width: '120px',
  heigth: '60px',
  color: '#FFF',
}

//stateless function
const likeMeText = () => <h1>LIKE ME</h1>

export default class LikeButton extends React.Component
{
  constructor(props)
  {
    super(props);
    // State
    this.state =
    {
      active: this.props.active,
    }

    this.isActive = this.isActive.bind(this);
    this.handleClickLike = this.handleClickLike.bind(this);
  }

  handleClickLike()
  {
    //const {postId, active} = this.props;

    this.setState({
      active: !this.state.active,
    });

    Meteor.call('updatePostActive', this.props);

    // Posts.update({_id: postId}, {$set: {
    //   active: this.state.active
    // }});
  }

  isActive()
  {
    return this.state.active ? active : inActive
  }

  render() {
    return (
      <button type='button'style={this.isActive()} onClick={this.handleClickLike}>
        {likeMeText()}
      </button>
    )
  }
}

LikeButton.propTypes = {
  postId: PropTypes.oneOfType([
    PropTypes.object.isRequired,
    PropTypes.string.isRequired
  ]),
  active: PropTypes.bool.isRequired,
}
