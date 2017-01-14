import React, { Component } from 'react';
import { register } from '../helpers/auth';
import RegisterForm  from '../components/RegisterForm';

import '../assets/stylesheets/register.scss';


class RegisterContainer extends Component {
  handleSubmit = (values) => {
    console.log(values)
  }
  render () {
    return (
      <div className="register-page-container">
        <RegisterForm onSubmit={this.handleSubmit} />
      </div>
    )
  }
}
export default RegisterContainer;
