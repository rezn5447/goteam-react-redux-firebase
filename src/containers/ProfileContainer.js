import React, { Component } from 'react';
import _ from 'lodash';
import Profile  from '../components/Profile';
import { ref } from '../helpers/database';
import '../assets/stylesheets/users.scss';


class ProfileContainer extends Component {

  renderProfile(){
    return _.map( this.props.user, (key,user) => {
      return <Profile first_name={user.first_name} last_name={user.last_name}
      email={user.email} street={user.street} city={user.city} />
    })
  }
  render () {
    return (
      <div id="user-show-page-container">
        <Profile user={this.props.user} />
      </div>
    )
  }
}
export default ProfileContainer;
