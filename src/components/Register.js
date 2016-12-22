import React, {Component} from 'react';
import { auth } from '../helpers/auth';

class Register extends Component {
  handleSubmit = (e) => {
    e.preventDefault()
    auth(this.email.value, this.pw.value)
  }
  render () {
    return (
      <div className="col-sm-6 col-sm-offset-3">
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input type="name" className="form-control"
            placeholder="First Name" ref={(first_name) => this.first_name = first_name} />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input type="name" className="form-control"
            placeholder="Last Name" ref={(last_name) => this.first_name = last_name} />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input className="form-control" ref={(email) => this.email = email} placeholder="Email"/>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Password" ref={(pw) => this.pw = pw} />
          </div>

          <button type="submit" className="btn btn-primary">Register</button>
        </form>
      </div>
    )
  }
}

export default Register;
