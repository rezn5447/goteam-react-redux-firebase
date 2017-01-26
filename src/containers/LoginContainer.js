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

class Login extends Component {
  handleFormSubmit = (values) => {
    this.props.signIn(values)
  }

  renderField = ({ input, label, type, meta: {touched, error} }) => (
    <fieldset className={`form-group ${touched && error ? 'has-error' : ''}`}>
      <label className="control-label">{label}</label>
      <div>
        <input {...input} placeholder={label} className="form-control" type={type} />
        {touched && error && <div className="help-block"> {error} </div>}
      </div>
    </fieldset>
  );

  render () {
    return (
      <div className="login-page-container">
        <div className="login-form">
          <h1> Login </h1>
          <form onSubmit={this.props.handleSubmit(this.handleFormSubmit)}>
            <FontAwesome className="super-crazy-colors" size="2x" name="user" />
            <Field className="form-control" component={this.renderField} type="email" name="email" placeholder="Email"/><br/>
            <FontAwesome className="fa fa-lock" name="lock" aria-hidden="true" />
            <Field className="form-control" component={this.renderField} type="password" name="pw" placeholder="Password"/><br/>
            <button type="submit" className="btn btn-primary">Login</button>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return { authenticated: state.auth.authenticated}
}

export default connect(mapStateToProps, actions)(reduxForm({
  form: 'login',
  validate
})(Login));
