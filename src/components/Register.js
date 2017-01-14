import React, {Component} from 'react';
import { register } from '../helpers/auth';
import '../assets/stylesheets/register.scss';

class Register extends Component {
  handleSubmit = (e) => {
    e.preventDefault()
    register(this.user)
  }

  render () {
    return (
      <div className="register-page-container">
        <div className="register-form">
          <h1>Register as New User</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="register-div">
              <input type="name"    className="form-control" placeholder="First Name" ref={(first_name) => this.user.first_name = first_name} />
              <input type="name"    className="form-control" placeholder="Last Name" ref={(last_name) => this.user.last_name = last_name} />
              <input type="email"   className="form-control" ref={(email) => user.email = email} placeholder="Email"/>
            </div>
            <div className="register-div">
              <input type="address" className="form-control" ref={(street) => this.user.street = street} placeholder="Street"/>
              <input type="city"    className="form-control" ref={(city) => this.user.city = city} placeholder="City"/>
              <input type="state"   className="form-control" ref={(state) => this.user.state = state} placeholder="State"/>
              <input type="zip"     className="form-control" ref={(zip) => this.user.zip = zip} placeholder="Zip"/>
            </div>
            <div className="register-div">
              <input type="password" className="form-control" placeholder="Password" ref={(pw) => this.user.pw = pw} />
            </div>
            <button type="submit" className="btn btn-primary">Register</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Register;
