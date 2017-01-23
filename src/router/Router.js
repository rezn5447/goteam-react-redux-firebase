import React, {Component} from 'react';
import { Router, Route, browserHistory } from 'react-router';
import ProfileContainer from '../containers/ProfileContainer';
import HomeContainer from '../containers/HomeContainer';
import RegisterContainer from '../containers/RegisterContainer';
import SportsContainer from '../containers/SportsContainer';
import FindMatchesContainer from '../containers/FindMatchesContainer';
import MainLayout from '../containers/MainLayout';

class MyRouter extends Component {
  render(){
    return(
      <Router history={browserHistory}>
        <Route path={"/"} component={MainLayout}>
          <Route path={"login"} component={HomeContainer} />
          <Route path={"register"} component={RegisterContainer} onEnter={this.redirectToProfile}/>

// Need to separate this area with authentication verification properly // 
          <Route path={"users/:user_ID"} component={ProfileContainer} >
            <Route path={"home"} component={HomeContainer} />
            <Route path={"sports"} component={SportsContainer} />
            <Route path={"play"} component={FindMatchesContainer}/>
          </Route>
        </Route>
      </Router>
    );
  }
}

export default MyRouter;
