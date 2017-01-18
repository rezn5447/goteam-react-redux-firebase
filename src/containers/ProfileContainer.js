import React, { Component } from 'react';
import Profile  from '../components/Profile';
import { ref } from '../helpers/database';
import '../assets/stylesheets/users.scss';


class ProfileContainer extends Component {
  constructor(){
    super();
    this.state = {
      user: {}
    }
  }

  componentDidMount(){
    const userRef = ref.child("users/0");
    userRef.on('value', snap =>{
      this.setState({
        user: snap.val()
      })
    });

  }
  render () {
    return (
      <div id="user-show-page-container">
        <Profile first_name="Person" user={this.state.user}/>
      </div>
    )
  }
}
export default ProfileContainer;
