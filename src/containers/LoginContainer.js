import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import FontAwesome from 'react-fontawesome';

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
        <div className="login-form">
          <h1> Login </h1>
          <form onSubmit={this.handleSubmit}>
            <FontAwesome className="super-crazy-colors" size="2x" name="user" />
            <Field className="form-control" component="input" type="email" name="email" placeholder="Email"/><br/>
            <FontAwesome className="fa fa-lock" name="lock" aria-hidden="true" />
            <Field className="form-control" component="input" type="password" name="pw" placeholder="Password"/><br/>
            <button type="submit" className="btn btn-primary">Login</button>
          </form>
        </div>
      </div>
    );
  }
}
export default reduxForm({
    form: 'login'
})(LoginContainer)
