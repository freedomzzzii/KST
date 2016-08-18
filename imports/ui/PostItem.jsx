import React, {PropTypes} from 'react';

//Component
import LikeButton from './LikeButton.jsx';
import DeleteButton from './DeleteButton.jsx';

export default class PostItem extends React.Component
{
  // componentDidUpdate()
  // {
  //   console.log(this.props.data);
  // }

  render()
  {
    return (
      <li>
        {this.props.data.text} POST BY
        {this.props.data.name}
        <LikeButton postId={this.props.data._id} active={this.props.data.active}/>
        <DeleteButton postId={this.props.data._id}/>
      </li>
    )
  }
}
PostItem.propTypes = {
  data: PropTypes.object.isRequired,
}
