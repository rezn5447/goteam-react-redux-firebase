import React, {Component} from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import ProfileContainer from '../containers/ProfileContainer';
import HomeContainer from '../containers/HomeContainer';
import LoginContainer from '../containers/LoginContainer';
import RegisterContainer from '../containers/RegisterContainer';
import SportsContainer from '../containers/SportsContainer';
import FindMatchesContainer from '../containers/FindMatchesContainer';
import MainLayout from '../containers/MainLayout';

class MyRouter extends Component {
  render(){
    return(
      <Router history={browserHistory}>
        <Route path={"/"} component={MainLayout}>
          <IndexRoute component={HomeContainer} />
          <Route path={"home"} component={HomeContainer} />
          <Route path={"login"} component={LoginContainer} />
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
