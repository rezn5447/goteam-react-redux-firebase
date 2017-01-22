import React, {Component} from 'react';
import { currentUser } from '../helpers/auth';
import LoginContainer  from '../containers/LoginContainer';
import MatchesMapContainer  from '../containers/MatchesMapContainer';
import '../assets/stylesheets/home.scss';


class Home extends Component {

  HomeDisplay(){
    if(currentUser) {
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

export default Home;
