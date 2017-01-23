import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../actions/auth';
import FontAwesome from 'react-fontawesome';

const validate = values => {
  const errors = {};

  if(!values.email) {
    errors.email = "Please enter an email.";
  }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address.";
  }

  if(!values.password){
    errors.password = "Please enter a password";
  }

  return errors;
}

class LoginContainer extends Component {
  handleSubmit = (values) => {
    console.log(values)
  //  this.props.signIn(values)
  }

  renderAuthenticationError() {
    if (this.props.authenticationError) {
      return <div className="alert alert-danger">{ this.props.authenticationError }</div>;
    }
      return <div></div>;
  }

  render () {
    return (
      <div className="login-page-container">
        <div className="login-form">
          <h1> Login </h1>
          <form onSubmit={this.handleSubmit}>
            <FontAwesome className="super-crazy-colors" size="2x" name="user" />
            <Field className="form-control" component="input" type="email" name="email" placeholder="Email"/><br/>
            <FontAwesome className="fa fa-lock" name="lock" aria-hidden="true" />
            <Field className="form-control" component="input" type="password" name="pw" placeholder="Password"/><br/>
            <button type="submit" className="btn btn-primary">Login</button>
          </form>
        </div>
      </div>
    );
  }
}
export default connect(null, actions)(reduxForm({
  form: 'login',
  validate
})(LoginContainer));
