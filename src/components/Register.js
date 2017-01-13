import React, {Component} from 'react';
import { auth } from '../helpers/auth';
import '../assets/stylesheets/register.scss';

class Register extends Component {
  handleSubmit = (e) => {
    e.preventDefault()
    auth(this.email.value, this.pw.value)
  }
  render () {
    return (
      <div className="register-page-container">
          <h1>Register</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="register-div">
              <input type="name" className="form-control"
              placeholder="First Name" ref={(first_name) => this.first_name = first_name} />
              <input type="name" className="form-control"
              placeholder="Last Name" ref={(last_name) => this.last_name = last_name} />
              <input className="form-control" ref={(email) => this.email = email} placeholder="Email"/>
            </div>
            <div className="register-div">
              <input className="form-control" ref={(street) => this.street = street} placeholder="Street"/>
              <input className="form-control" ref={(city) => this.city = city} placeholder="City"/>
              <input className="form-control" ref={(state) => this.state = state} placeholder="State"/>
              <input className="form-control" ref={(zip) => this.zip = zip} placeholder="Zip"/>
            </div>
            <div className="register-div">
              <input type="password" className="form-control" placeholder="Password" ref={(pw) => this.pw = pw} />
              <input type="password" className="form-control" placeholder="Confirm Password" ref={(pw) => this.pw = pw} />
            </div>

            <button type="submit" className="btn btn-primary">Register</button>
          </form>
      </div>
    )
  }
}

export default Register;
