import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router";
import * as actions from '../actions/auth';
import logo from '../assets/images/logo2.png';


class Header extends Component{

  handleSubmit = () => {
    this.props.signOut()
  }

  userActions(){
    if(this.props.authenticated){
      return(
        <div className="login-header">
          <Link to="users/:user_ID">My Profile</Link> |
          <Link to="users/:user_ID/sports"> Play!</Link> |
          <a onClick={this.handleSubmit}> Logout</a>
        </div>
        )
    } else {
      return <Link to="register">Register</Link>
    }
  }

  render(){
    return(
      <header>
        <div className="header-left">
          <Link to="home"><img src={logo} alt="go-team-logo" />
          </Link>
        </div>
        <div className="header-middle">
          <Link to="home">GO TEAM!</Link>
        </div>
        <div className="header-right">
          {this.userActions()}
        </div>
      </header>
    );
  }
}

function mapStateToProps(state){
console.log(state)
return { authenticated: state.authenticated,
         user: state.user }
}

export default connect(mapStateToProps, actions)(Header);
