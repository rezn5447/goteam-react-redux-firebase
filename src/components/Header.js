import React, { Component } from 'react';
import { Link } from "react-router";


function UserGreeting(props){
  return <h1>Welcome Back {props.user}</h1>
}

function GuestGreeting(props){
  return <h1>Please {props.msg}</h1>
}

function Greeting(props){
  const isLoggedIn = props.isLoggedIn;
  if(isLoggedIn){
    return <UserGreeting user="Martin"/>
  }else{
    return <GuestGreeting msg="SIGN UP MF"/>
  }
}

class Header extends Component{
  render(){
    return(
      // <nav>
      // <ul>
      //   <li><Link to="/">Home</Link></li>
      //   <li><Link to="/profile">Profile</Link></li>
      //   <li><Link to="/login">Login</Link></li>
      //   <li><Link to="/register">Register</Link></li>
      // </ul>
      // </nav>
  <nav className="navbar navbar-light bg-faded">
    <Link className="navbar-brand" to="/">Navbar</Link>
    <ul className="nav navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home<span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link to="/profile" className="nav-link">Profile</Link>
      </li>
      <li className="nav-item">
        <Link to="/login" className="nav-link">Login</Link>
      </li>
      <li className="nav-item">
        <Link to="/register" className="nav-link">Register</Link>
      </li>
    </ul>
  </nav>

    );
  }
}

export default Header;
