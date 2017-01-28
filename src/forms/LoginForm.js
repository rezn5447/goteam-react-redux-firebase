import React from 'react';
import { Field, reduxForm } from 'redux-form';


const LoginForm = (props) => {
  const { handleSubmit } = props;
  return(
      <div className="login-form">
        <h1> Login </h1>
        <form onSubmit={handleSubmit}>
          <FontAwesome className="super-crazy-colors" size="2x" name="user" />
          <Field className="form-control" component="input" type="email" name="email" placeholder="Email"/><br/>
          <FontAwesome className="fa fa-lock" name="lock" aria-hidden="true" />
          <Field className="form-control" component="input" type="password" name="pw" placeholder="Password"/><br/>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
    )
  }

export default reduxForm({
    form: 'login'
})(LoginForm)
