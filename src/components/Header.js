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
      <header>
      <Greeting isLoggedIn={true}/>
      <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
      </ul>
      </nav>
      </header>
    );
  }
}

export default Header;
