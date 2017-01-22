import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/auth';
import LoginForm  from '../forms/LoginForm';

class LoginContainer extends Component {
  handleSubmit = (values) => {
    this.props.signIn(values)
    console.log(this.state.authed)
  }
  render () {
    return (
      <div className="login-page-container">
        <LoginForm onSubmit={this.handleSubmit} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { authed: state.authed };
}

export default connect(mapStateToProps, actions)(LoginContainer);
