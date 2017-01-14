import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';


const LoginForm = (props) => {
  const { handleSubmit } = props;
  return(
      <div className="login">
        <h1> Login </h1>
        <form onSubmit={handleSubmit}>
          <i className="fa fa-envelope" aria-hidden="true"></i>
          <Field className="form-control" component="input" type="email" name="Email" placeholder="Email"/>

          <i className="fa fa-lock fa-lg" aria-hidden="true"></i>
          <Field className="form-control" component="input" type="password" name="pw" placeholder="Password"/>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
    )
  }


export default reduxForm({
    form: 'login'
})(LoginForm)
