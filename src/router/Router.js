import React, {Component} from 'react';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';
import RequireAuth from '../containers/RequireAuth'
import ProfileContainer from '../containers/ProfileContainer';
import Home from '../containers/HomeContainer';
import Login from '../containers/LoginContainer';
import Register from '../containers/RegisterContainer';
import Sports from '../containers/SportsContainer';
import FindMatches from '../containers/FindMatchesContainer';
import MainLayout from '../containers/MainLayout';

class MyRouter extends Component {
  render(){
    return(
      <Router history={browserHistory}>
        <Route path={"/"} component={MainLayout}>
          <IndexRedirect to="/login" />
          <Route path={"login"} component={Login} />
          <Route path={"register"} component={Register}/>

// Need to separate this area with authentication verification properly //
          <Route path={"home"} component={RequireAuth(Home)} />
          <Route path={"users/:user_ID"} component={RequireAuth(ProfileContainer)} >
            <Route path={"sports"} component={RequireAuth(Sports)} />
            <Route path={"play"} component={RequireAuth(FindMatches)}/>
          </Route>
        </Route>
      </Router>
    );
  }
}

export default MyRouter;
