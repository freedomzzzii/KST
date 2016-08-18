import {Meteor} from 'meteor/meteor';
import React, {PropTypes} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {FlowRouter} from 'meteor/kadira:flow-router';
//Collection
import {Posts} from '../api/collections/Posts.js';

//Component
import PostItem from '../ui/PostItem.jsx';
import LoginForm from '../ui/LoginForm.jsx';
import LogoutButton from '../ui/LogoutButton.jsx';

class ShowPostPage extends React.Component
{
  renderPost()
  {
    // const data = [
    //   {name: 'J', text: 'Hi, I am J'},
    //   {name: 'Jessica', text: 'Hi, I am Jessica'},
    //   {name: 'K', text: 'Hi, I am K'},
    //   {name: 'Krystal', text: 'Hi, I am Krystal'},
    // ];
    //console.log(this.props.posts);
    return this.props.posts.map((post, index) => {
      return <PostItem key={index} data={post} />
    })
  }

  isLogin()
  {
    return this.props.userId ? <LogoutButton/> : <LoginForm/>
  }

  handleClickFormButton()
  {
    //FlowRouter.go('form.root');
    FlowRouter.go('/form/myForm');
  }

  genFormPath()
  {
    const routeName = 'form.myForm';
    const params = {formId: 34};
    const queryParams = {j: 'ILuvU'};
    return FlowRouter.path(routeName, params, queryParams);
  }

  render()
  {
    return (
      //HTML here
      <section className='test col-xs-12'>
        {this.isLogin()}
        <ul>
          {this.renderPost()}
          <button onClick={this.handleClickFormButton}>
            Go to Form
          </button>
          <br/>
          <a href={this.genFormPath()}>Go to myForm</a>
        </ul>
      </section>
    )
  }
}



export default createContainer((props) => {
  const subcribe = Meteor.subscribe('posts.all');
  let posts = [];

  console.log(props.userId);

  if(subcribe.ready())
  {
    posts = Posts.find().fetch();
  }

  return {
    posts,
    userId: Meteor.userId(),
  }
}, ShowPostPage);
