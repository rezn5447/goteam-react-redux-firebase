import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../actions/auth';



class RegisterContainer extends Component {
  handleSubmit = (values) => {
    console.log(values)
    //  this.props.createUser(values)
  }

  render () {
    return (
      <div className="register-page-container">
        <div className="register-form">
        <h1>Register as New User</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="register-div">
              <Field className="form-control" component="input" type="name" name="first_Name" placeholder="First Name"/>
              <Field className="form-control" component="input" type="name" name="last_name" placeholder="Last Name"/>
              <Field className="form-control" component="input" type="email" name="email" placeholder="Email"/><br/>
              <Field className="form-control" component="input" type="address" name="street" placeholder="Street"/>
              <Field className="form-control" component="input" type="city" name="city" placeholder="City"/>
              <Field className="form-control" component="input" type="state" name="state" placeholder="State"/>
              <Field className="form-control" component="input" type="zip" name="zip" placeholder="Zip"/><br/>
              <Field className="form-control" component="input" type="password" name="pw" placeholder="Password"/>
            </div><br/>
            <button type="submit" className="btn btn-primary">Register</button>
          </form>
        </div>
      </div>
    )
  }
}

export default connect(null, actions)(reduxForm({
  form: 'register'
})(RegisterContainer));
