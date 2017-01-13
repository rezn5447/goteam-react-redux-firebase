import React, { Component } from 'react';
import { Link } from "react-router";
import '../assets/stylesheets/header.scss';
import logo from '../assets/images/logo.png';
class Header extends Component{
  render(){
    return(
  <div>
    <div className="header-left">
      <Link to="/">{logo}</Link>
    </div>
    <div className="header-middle">
      <Link to="/">'GO TEAM!'</Link>
    </div>
    <div className="header-right">
      <Link to="/login" className="nav-link">Login</Link>
    </div>
  </div>
    );
  }
}

export default Header;
