import React, {Component} from 'react';
import { connect } from 'react-redux';
import MatchesMap  from '../components/MatchesMap';
import '../assets/stylesheets/home.scss';
import '../assets/stylesheets/home.scss';

class Home extends Component {


  render(){
    return(
      <div id="matches-in-area-container">
        <MatchesMap />
      </div>
      );
    }
  }

function mapStateToProps(state){
  return { authenticated: state.auth.authenticated }
}

export default connect(mapStateToProps)(Home);
