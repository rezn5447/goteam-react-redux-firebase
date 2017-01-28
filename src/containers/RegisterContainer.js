import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../actions/auth';

const validate = values => {
  const errors = {};
  if(!values.first_name){
    errors.password = "Please enter you First Name";
  }
  if(!values.last_name){
    errors.password = "Please enter a password";
  }
  if(!values.email) {
    errors.email = "Please enter an email.";
  }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address.";
  }
  if(!values.email){
    errors.password = "Please enter a password";
  }
  if(!values.street){
    errors.street = "Please enter a street";
  }
  if(!values.city){
    errors.city = "Please enter a city";
  }
  if(!values.state){
    errors.state = "Please enter a state";
  }
  if(!values.zip){
    errors.zip = "Please enter a zip";
  }
  if(!values.pw){
    errors.pw = "Please enter a password";
  }

  return errors;
}

class Register extends Component {
  handleFormSubmit = (values) => {
    this.props.registerUser(values)
  }

  render () {
    return (
      <div className="register-page-container">
        <div className="register-form">
        <h1>Register as New User</h1>

          <form onSubmit={this.props.handleSubmit(this.handleFormSubmit)}>
            <fieldset className="register-div">
              <Field className="form-control" component="input" type="text" name="first_name" placeholder="First Name"/>
              <Field className="form-control" component="input" type="text" name="last_name" placeholder="Last Name"/>
              <Field className="form-control" component="input" type="email" name="email" placeholder="Email"/><br/>
              <Field className="form-control" component="input" type="text" name="street" placeholder="Street"/>
              <Field className="form-control" component="input" type="text" name="city" placeholder="City"/>
              <Field className="form-control" component="input" type="text" name="state" placeholder="State"/>
              <Field className="form-control" component="input" type="text" name="zip" placeholder="Zip"/><br/>
              <Field className="form-control" component="input" type="password" name="pw" placeholder="Password"/>
              <Field className="form-control" component="input" type="password" name="pw-conf" placeholder="Confirm Password"/>
            <br/>
            <button type="submit" className="btn btn-primary">Register</button>
            </fieldset>
          </form>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    authenticated: state.auth.authenticated
  }
}
export default connect(mapStateToProps, actions)(reduxForm({
  form: 'register',
  validate
})(Register));
