import React, {Component} from 'react';
import LoginContainer  from '../containers/LoginContainer';
import MatchesMapContainer  from '../containers/MatchesMapContainer';
import '../assets/stylesheets/home.scss';


class HomeContainer extends Component {
  HomeDisplay(){
    if(this.props.authed) {
      return <MatchesMapContainer />
    }else{
      return <LoginContainer />
    }
  }

  render(){
    return(
      <div id="1-reg">
        {this.HomeDisplay()}
      </div>
      );
    }
  }

export default HomeContainer;
