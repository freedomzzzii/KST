import React from 'react';
import {Accounts} from 'meteor/accounts-base';
import {Session} from 'meteor/session';

export default class loginForm extends React.Component
{
  constructor(props)
  {
    super(props);
    this.handleClickRegister = this.handleClickRegister.bind(this);
    this.handleClickLogin = this.handleClickLogin.bind(this);
  }

  // componentDidMount()
  // {
  //   alert(this.refs.username.value = 'Jessica');
  // }

  handleClickRegister()
  {
    const {username, password} = this.refs;
    const option = {
      username: username.value,
      password: password.value,
      profile: {
        group: 'SNSD',
      },
    }
    Accounts.createUser(option, () => {
      console.log('Create new user');
    });
    // console.log(username.value);
    // console.log(password.value);
    // const username = this.refs.username.value;
    // const password = this.refs.password.value
    //console.log(this.refs);
  }

  handleClickLogin()
  {
    const {username, password} = this.refs;
    Meteor.loginWithPassword(username.value, password.value);
    console.log(username.value);
    Session.set('currentUser', username.value);
  }

  render()
  {
    return (
      <div id="login-form">
        <form>
          <label htmlFor="">Username</label>
          <input type="text" ref='username' id='username'/>
          <br/>
          <br/>
          <label htmlFor="">Password</label>
          <input type="password" ref='password' id='password'/>
        </form>
        <br/>
        <button ref='login' type='button' onClick={this.handleClickLogin}>
          Login
        </button>
        <button ref='register' type='button' onClick={this.handleClickRegister}>
          Register
        </button>
      </div>
    )
  }
}
