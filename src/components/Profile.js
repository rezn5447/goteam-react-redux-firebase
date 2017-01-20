import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/sports';

class Profile extends Component {

  render(){
  return(
    <div className="col-md-4">
      <p>This is the Profile Component!</p>
      <div className="col-md-3 mdb-color darken-2">
        <p>First: {this.props.user.first_name} </p>
        <p>Last: {this.props.user.last_name} </p>
        <p>Email: {this.props.user.email} </p>
        <p>Street: {this.props.user.street} </p>
        <p>City: {this.props.user.city}</p>
      </div>
      <div className="col-md-3 mdb-color darken-2">
        {this.props.matches}
      </div>
    </div>
    );
  }
}

export default connect(null, actions)(Profile);
