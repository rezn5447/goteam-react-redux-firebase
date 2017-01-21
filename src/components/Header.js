import React, { Component } from 'react';
import { currentUser,   userID } from '../helpers/auth';
import { Link } from "react-router";
import '../assets/stylesheets/header.scss';
import logo from '../assets/images/logo2.png';

class Header extends Component{
  componentDidMount(){

  }
  userActions(){
    if(currentUser){
      return(
        <ul>
          <Link to="home">'Go Home'</Link>
          <Link to="profile">'My Profile'</Link>
          <Link to="play">'Play'</Link>
          <Link to="logout">'Logout'</Link>
        </ul>
        )
    } else {
      return <Link to="register">Register</Link>
    }
  }
  render(){
    return(
      <header>
        <div className="header-left">
          <Link to="/"><img src={logo} alt="go-team-logo" />
          </Link>
        </div>
        <div className="header-middle">
          <Link to="/">GO TEAM!</Link>
        </div>
        <div className="header-right">
          {this.userActions()}
        </div>
      </header>
    );
  }
}

export default Header;
