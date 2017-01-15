import React from 'react';
import { Field, reduxForm } from 'redux-form';
import FontAwesome from 'react-fontawesome';

const LoginForm = (props) => {
  const { handleSubmit } = props;
  return(
      <div className="login-form">
        <h1> Login </h1>
        <form onSubmit={handleSubmit}>
          <FontAwesome className="super-crazy-colors" name="rocket" />
          <Field className="form-control" component="input" type="email" name="email" placeholder="Email"/>
          <FontAwesome className="fa fa-lock fa-lg" name="rocket" aria-hidden="true" />
          <Field className="form-control" component="input" type="password" name="pw" placeholder="Password"/>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
    )
  }

export default reduxForm({
    form: 'login'
})(LoginForm)
