import React, { Component } from 'react';
import { login } from '../helpers/auth';
import LoginForm  from '../components/LoginForm';

class LoginContainer extends Component {
  handleSubmit = (values) => {
    console.log(values)
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
