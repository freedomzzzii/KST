import React, {Component, PropTypes} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {FlowRouter} from 'meteor/kadira:flow-router';

//Component
import PostForm from '../ui/PostForm.jsx';

class FormPage extends Component
{
  displayFormId()
  {
    return FlowRouter.getParam('formId');
  }

  displayQueryParam()
  {
    console.log(FlowRouter.current());
    return FlowRouter.getQueryParam('j');
  }

  render()
  {
    return (
      <section>
        <h1>Form Props {this.props.formId}</h1>
        <h1>Form getParams {this.displayFormId()}</h1>
        <h1>Form qetQueryParam {this.displayQueryParam()}</h1>
        <h3>{FlowRouter.getRouteName()}</h3>
        <PostForm/>
      </section>
    )
  }
}

FormPage.PropTypes = {
  formId: PropTypes.string,
}

export default createContainer(() => {
  return {

  }
}, FormPage);
