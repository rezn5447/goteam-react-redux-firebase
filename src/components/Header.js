import React, { Component } from 'react';
import { Link } from "react-router";
import '../assets/stylesheets/header.scss';
import logo from '../assets/images/logo2.png';

// function UserActions(props){
//   if(props.user){
//     <div>
//       <Link to="/">'Go Home'</Link>
//       <Link to="/">'My Profile'</Link>
//       <Link to="/">'Play'</Link>
//       <Link to="/">'Logout'</Link>
//     </div>
//   }else {
//
//   }
// }

class Header extends Component{
  constructor(){
    super();
    this.state = {
      user: {name: ''}
    }
  }
  componentDidMount(){

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
          <Link to="register">Register</Link>
        </div>
      </header>
    );
  }
}

export default Header;
