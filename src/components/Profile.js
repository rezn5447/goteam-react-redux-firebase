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
            <span className="profile">
              Name: { this.props.userInfo.first_name} {this.props.userInfo.last_name}
            </span>
        </p>
        <p>
          <FontAwesome className="fa fa-envelope-square" name=""  aria-hidden="true"/>
            <span className="profile">
              Email: {this.props.userInfo.email}
            </span>
        </p>
        <p>
        <FontAwesome className="fa fa-building" name="building" aria-hidden="true"/>
          <span className="profile">
            Street: {this.props.userInfo.street} {this.props.userInfo.city} {this.props.userInfo.state} {this.props.userInfo.zip}
          </span>
        </p>
      </div>
    );
  }
}

export default connect(null, actions)(Profile);
