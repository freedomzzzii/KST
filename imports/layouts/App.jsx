// import {Meteor} from 'meteor/meteor';
import React from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Session} from 'meteor/session';

import ShowPostPage from '../pages/ShowPostPage.jsx';
import FormPage from '../pages/FormPage.jsx';

Session.setDefault('currentUser', 'No user');
const ShowUser = (props) => (
  <h1>Hello, {props.username}</h1>
)

//stateless function
export const App = (props) => (
  <main>
    <ShowUser username={props.currentUser}/>
    {props.content}
    {props.options}
  </main>
)

export default createContainer(() => {
  return {
    currentUser: Session.get('currentUser'),
  }
}, App);

// export default class App extends React.Component
// {
//   constructor(props)
//   {
//       super(props);
//       console.log(this.props.content);
//   }
//
//   render()
//   {
//     return (
//       <main>
//         <h1>Hello My React App</h1>
//         {this.props.content}
//       </main>
//     )
//   }
// }
