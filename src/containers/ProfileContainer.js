import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import * as actions from '../actions/user';
import Profile  from '../components/Profile';
import '../assets/stylesheets/users.scss';


class ProfileContainer extends Component {

  componentWillMount(){
    this.props.fetchUser();
    console.log(this.state)
  }

  renderProfile(){
    return _.map( this.props.user, (key,values) => {
      return <Profile first_name={values.first_name} last_name={values.last_name}
      email={values.email} street={values.street} city={values.city} />
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
  function mapStateToProps(state){
    return { user: state.user}
  }
export default connect(mapStateToProps, actions)(ProfileContainer);
