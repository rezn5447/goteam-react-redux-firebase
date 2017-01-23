import React, {Component} from 'react';
import { connect } from 'react-redux';
import LoginContainer  from '../containers/LoginContainer';
import MatchesMap  from '../components/MatchesMap';
import '../assets/stylesheets/home.scss';


class HomeContainer extends Component {
  HomeDisplay(){
    if(this.props.authenticated) {
      return <MatchesMap />
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
function mapStateToProps(state){
  console.log(state)
  return { authenticated: state.authenticated }

}
export default connect(mapStateToProps)(HomeContainer);
