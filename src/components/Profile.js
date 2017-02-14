import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/sports';
import FontAwesome from 'react-fontawesome';
class Profile extends Component {
  displayPicture(){
    if(this.props.userInfo.imgUrl !== ""){
      console.log(this.props.userInfo.imgUrl)
    }else{
      console.log("no user image. Use Default")
    }
  }
  displayMatches(){

  }

  render(){
  return(
      <div>
        <p>
          <FontAwesome className="fa fa-user-circle" name="circle" aria-hidden="true"/>
            Name: { this.props.userInfo.first_name} {this.props.userInfo.last_name}
        </p>
        <p>
          <FontAwesome className="fa fa-envelope-square" name=""  aria-hidden="true"/>
            Email: {this.props.userInfo.email}
        </p>
        <p>
        <FontAwesome className="fa fa-building" name="building" aria-hidden="true"/>
        Street: {this.props.userInfo.street} {this.props.userInfo.city} {this.props.userInfo.state} {this.props.userInfo.zip}
        </p>
        <p>City: {this.props.userInfo.city}</p>
      </div>
    );
  }
}

export default connect(null, actions)(Profile);
