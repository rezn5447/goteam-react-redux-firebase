import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/sports';
// <p>Last: {props.last_name} </p>
// <p>Email: {props.email} </p>
// <p>Street: {props.street} </p>
// <p>City: {props.city}</p>

class Profile extends Component {

  render(){
  return(
    <div className="col-md-4">
      <p>This is the Profile Component!</p>
      <div className="col-md-3 mdb-color darken-2">
        <p>First: {this.props.user.first_name} </p>
      </div>
    </div>
    );
  }
}



export default connect(null, actions)(Profile);
