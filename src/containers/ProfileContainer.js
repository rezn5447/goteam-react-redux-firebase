import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import * as actions from '../actions/user';
import Profile  from '../components/Profile';
import MatchItem  from '../components/MatchItem';
import '../assets/stylesheets/users.scss';


class ProfileContainer extends Component {

  componentWillMount(){
    this.props.fetchUser();
  }

  renderMatches(){
    return _.map( this.props.user.matches, (match,key) =>{
      return <MatchItem key={key} id={match.id} date={match.date} type={match.type} location={match.location} />
    });
  }

  render () {
    return (
      <div id="user-show-page-container">
        <Profile user={this.props.user} />
        <ul className="list-group">
          {this.renderMatches()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state){
console.log(state)
return { user: state.user,
         matches: state.user.matches }
}

export default connect(mapStateToProps, actions)(ProfileContainer);
