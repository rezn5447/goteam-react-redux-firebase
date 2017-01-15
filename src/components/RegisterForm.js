import React from 'react';
import { Field, reduxForm } from 'redux-form';


const RegisterForm = (props) => {
  const { handleSubmit } = props;
    return (
      <div className="register-form">
        <h1>Register as New User</h1>
        <form onSubmit={handleSubmit}>
          <div className="register-div">
            <Field className="form-control" component="input" type="name" name="First_Name" placeholder="First Name"/>
            <Field className="form-control" component="input" type="name" name="Last_Name" placeholder="Last Name"/>
            <Field className="form-control" component="input" type="email" name="Email" placeholder="Email"/>
          </div>
          <div className="register-div">
            <Field className="form-control" component="input" type="address" name="Street" placeholder="Street"/>
            <Field className="form-control" component="input" type="city" name="City" placeholder="City"/>
            <Field className="form-control" component="input" type="state" name="State" placeholder="State"/>
            <Field className="form-control" component="input" type="zip" name="Zip" placeholder="Zip"/>
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
