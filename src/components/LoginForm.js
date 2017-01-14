import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';


const LoginForm = (props) => {
  const { handleSubmit } = props;
  return(
      <div className="col-sm-6 col-sm-offset-3">
        <h1> Login </h1>
        <form onSubmit={handleSubmit}>
          <Field className="form-control" component="input" type="email" name="Email" placeholder="Email"/>
          <Field className="form-control" component="input" type="password" name="pw" placeholder="Password"/>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
    )
  }


export default reduxForm({
    form: 'login'
})(LoginForm)
