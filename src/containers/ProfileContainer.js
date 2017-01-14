import React, { Component } from 'react';
import Profile  from '../components/Profile';
import { ref } from '../helpers/database';


class ProfileContainer extends Component {
  render () {
    return (
      <div className=" ">
        <Profile />
      </div>
    )
  }
}
export default ProfileContainer;
