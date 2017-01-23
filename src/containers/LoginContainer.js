import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/auth';
import LoginForm  from '../forms/LoginForm';

class LoginContainer extends Component {
  handleSubmit = (values) => {
    this.props.signIn(values)
  }
  renderAuthenticationError() {
  if (this.props.authenticationError) {
    return <div className="alert alert-danger">{ this.props.authenticationError }</div>;
  }
  return <div></div>;
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
