import React from 'react';
import { Field, reduxForm } from 'redux-form';


const RegisterForm = (props) => {
  const { handleSubmit } = props;
    return (
      <div className="register-form">
        <h1>Register as New User</h1>
        <form onSubmit={handleSubmit}>
          <div className="register-div">
            <Field className="form-control" component="input" type="name" name="first_Name" placeholder="First Name"/>
            <Field className="form-control" component="input" type="name" name="last_name" placeholder="Last Name"/>
            <Field className="form-control" component="input" type="email" name="email" placeholder="Email"/>
          </div>
          <div className="register-div">
            <Field className="form-control" component="input" type="address" name="street" placeholder="Street"/>
            <Field className="form-control" component="input" type="city" name="city" placeholder="City"/>
            <Field className="form-control" component="input" type="state" name="state" placeholder="State"/>
            <Field className="form-control" component="input" type="zip" name="zip" placeholder="Zip"/>
          </div>
          <div className="register-div">
            <Field className="form-control" component="input" type="password" name="pw" placeholder="Password"/>
          </div>
          <button type="submit" className="btn btn-primary">Register</button>
        </form>
      </div>
    )
  }

export default reduxForm({
  form: 'register'
})(RegisterForm)
