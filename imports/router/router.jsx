import React from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {mount} from 'react-mounter';

//Component or container
import App from '../layouts/App.jsx';

//Component pages
import ShowPostPage from '../pages/ShowPostPage.jsx';
import FormPage from '../pages/FormPage.jsx';

FlowRouter.route('/', {
  name: 'root',
  action()
  {
    mount(App, {
      content: <ShowPostPage/>,
      options: <FormPage/>,
    });
  },
});

const Form = FlowRouter.group({
  prefix: '/form',
  name: 'form',
});

// /form
Form.route('/', {
  name: 'form.root',
    action()
    {
      mount(App, {
        content: <FormPage/>,
      });
    },
});

// /form/myForm
Form.route('/myForm/:formId', {
  name: 'form.myForm',
    action(params)
    {
      mount(App, {
        content: <FormPage formId={params.formId}/>,
      });
    },
});

// FlowRouter.route('/form', {
//   name: 'form',
//   action()
//   {
//     mount(App, {
//       content: <FormPage/>,
//     });
//   },
// });
