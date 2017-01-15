import React, { Component } from 'react';
import Profile  from '../components/Profile';
import { ref } from '../helpers/database';


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
      <div className=" ">
        <Profile user={this.state.user}/>
      </div>
    )
  }
}
export default ProfileContainer;
