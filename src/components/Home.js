import React, {Component} from 'react';
import LoginContainer  from '../containers/LoginContainer';
import MatchesMapContainer  from '../containers/MatchesMapContainer';
import '../assets/stylesheets/home.scss';

function HomeDisplay(props){
  const current_user = props.current_user
  const authed = props.authed
  if(current_user && authed) {
    return <MatchesMapContainer user={current_user} />
  }else{
    return <LoginContainer />
  }
}

class Home extends Component {

render(){
  return(
    <div>
      <HomeDisplay current_user={this.props.user} authed={this.props.authed}/>
    </div>
    );
  }
}

export default Home;
