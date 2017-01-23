import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/auth';
import LoginForm  from '../forms/LoginForm';

class LoginContainer extends Component {
  handleSubmit = (values) => {
    this.props.signIn(values)
  }
  render () {
    return (
      <div className="login-page-container">
        <LoginForm onSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default connect(null, actions)(LoginContainer);
