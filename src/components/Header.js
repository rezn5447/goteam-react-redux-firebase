import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router";
import * as actions from '../actions/auth';
import logo from '../assets/images/logo2.png';
import '../assets/stylesheets/header.scss';

class Header extends Component{
  handleSubmit(){
    this.props.signOut()
  }
  componentDidMount(){

  }
  userActions(){
    if(this.props.authenticated){
      return(
        <ul>
          <Link to="home">Go Home</Link>
          <Link to="profile">My Profile</Link>
          <Link to="play">Play</Link>
          <button type="submit" className="btn btn-primary" onClick={this.props.handleSubmit}>Logout</button>
        </ul>
        )
    } else {
      return <Link to="register">Registation</Link>
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
function mapStateToProps(state){
  console.log(state)
  return { authenticated: state.authenticated }
}

export default connect(mapStateToProps, actions)(Header);
