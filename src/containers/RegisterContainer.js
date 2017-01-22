import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/user';
import RegisterForm  from '../forms/RegisterForm';

import '../assets/stylesheets/register.scss';


class RegisterContainer extends Component {
  handleSubmit = (values) => {
    this.props.createUser(values)
  }

  render () {
    return (
      <div className="register-page-container">
        <RegisterForm onSubmit={this.handleSubmit} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { sports: state.sports };

}

export default connect(mapStateToProps, actions)(RegisterContainer);
