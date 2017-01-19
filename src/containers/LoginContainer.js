import React, { Component } from 'react';
import { login } from '../helpers/auth';
import LoginForm  from '../forms/LoginForm';

class LoginContainer extends Component {
  handleSubmit = (values) => {
    login(values)
  }
  render () {
    return (
      <div className="login-page-container">
        <LoginForm onSubmit={this.handleSubmit} />
      </div>
    )
  }
}
export default LoginContainer;
