import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import * as actions from '../actions/auth';
import Profile  from '../components/Profile';
import MatchItem  from '../components/MatchItem';
import DefaultPic from '../assets/images/profile_pic/male_avatar.png'
import '../assets/stylesheets/users.scss';


class ProfileContainer extends Component {

  componentWillMount(){
    this.props.fetchUser();
  }
  
  renderProfileImage(){
    if(!this.props.user.imgUrl){
    return <div className="profile-pic"><img src={DefaultPic} alt="default-avatar"></img></div>
    }else {
    return <div className="profile-pic"><img src={this.props.user.imgUrl} alt={this.props.user.first_name}>  </img></div>
    }
  }
  renderMatches(){
    if(!this.props.user.matches){
      return <div> NO MATCHES YET!!! GO OUT AND PLAY!</div>
    }else {
      return _.map( this.props.user.matches, (match,key) =>{
        return <MatchItem key={key} id={match.id} date={match.date} type={match.type} location={match.location} />
      });
    }
  }

  render () {
    return (
      <div id="user-show-page-container">
        <div className="user-show-container">
          <div className="user-info-container">
            {this.renderProfileImage()}
            <Profile userInfo={this.props.user} />
            <ul className="list-group">
              {this.renderMatches()}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
return { user: state.user }
}

export default connect(mapStateToProps, actions)(ProfileContainer);
