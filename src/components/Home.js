import React, {Component} from 'react';
import LoginContainer  from '../containers/LoginContainer';
import MatchesMapContainer  from '../containers/MatchesMapContainer';
import '../assets/stylesheets/home.scss';

function HomeDisplay(props){
  const current_user = props.current_user
  if(current_user) {
    return <MatchesMapContainer user={current_user} />
  }else{
    return <LoginContainer />
  }
}

class Home extends Component {

render(){
  return(
    <div>
      <HomeDisplay current_user=""/>
    </div>
    );
  }
}

export default Home;
