import React, {Component} from 'react';
import { register } from '../helpers/auth';
import '../assets/stylesheets/register.scss';

class Register extends Component {

  handleSubmit = (e) => {
    e.preventDefault()
    let first_name = this.first_name.value;
    let last_name  = this.last_name.value;
    let email      = this.email.value;
    let street     = this.street.value;
    let city       = this.city.value;
    let state      = this.state.value;
    let zip        = this.zip.value;
    let pw         = this.pw.value;
    let user = {first_name, last_name, email, street, city, state, zip, pw};
    register(user)
  }

  render () {
    return (
      <div className="register-page-container">
        <div className="register-form">
          <h1>Register as New User</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="register-div">
              <input type="name"    className="form-control" placeholder="First Name" ref={(first_name) => this.first_name = first_name} />
              <input type="name"    className="form-control" placeholder="Last Name" ref={(last_name) => this.last_name = last_name} />
              <input type="email"   className="form-control" ref={(email) => this.email = email} placeholder="Email"/>
            </div>
            <div className="register-div">
              <input type="address" className="form-control" ref={(street) => this.street = street} placeholder="Street"/>
              <input type="city"    className="form-control" ref={(city) => this.city = city} placeholder="City"/>
              <input type="state"   className="form-control" ref={(state) => this.state = state} placeholder="State"/>
              <input type="zip"     className="form-control" ref={(zip) => this.zip = zip} placeholder="Zip"/>
            </div>
            <div className="register-div">
              <input type="password" className="form-control" placeholder="Password" ref={(pw) => this.pw = pw} />
            </div>
            <button type="submit" className="btn btn-primary">Register</button>
          </form>
        </div>
      </div>
    )
  }

  propTypes: {
    value: React.PropTypes.value.isRequired
  }
}

export default Register;
