import React, {Component} from 'react';
import { connect } from 'react-redux';
import LoginContainer  from '../containers/LoginContainer';
import MatchesMap  from '../components/MatchesMap';
import '../assets/stylesheets/home.scss';


class HomeContainer extends Component {
  render(){
    return(
      <div id="1-reg">
        <MatchesMap />
      </div>
      );
    }
  }

function mapStateToProps(state){
  return { authenticated: state.authenticated }
}

export default connect(mapStateToProps)(HomeContainer);
