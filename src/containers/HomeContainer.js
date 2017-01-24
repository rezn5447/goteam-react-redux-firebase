import React, {Component} from 'react';
import { connect } from 'react-redux';
import MatchesMap  from '../components/MatchesMap';
import '../assets/stylesheets/home.scss';
import '../assets/stylesheets/home.scss';

class HomeContainer extends Component {


  render(){
    return(
      <div id="matches-in-area-container">

      </div>
      );
    }
  }

function mapStateToProps(state){
  return { authenticated: state.authenticated }
}

export default connect(mapStateToProps)(HomeContainer);
