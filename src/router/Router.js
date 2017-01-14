import React, {Component} from 'react';
import { Router, Route, browserHistory } from 'react-router';
import ProfileContainer from '../containers/ProfileContainer'
import HomeContainer from '../containers/HomeContainer'
import LoginContainer from '../containers/LoginContainer'
import RegisterContainer from '../containers/RegisterContainer'
import MainLayout from '../containers/MainLayout'

class MyRouter extends Component {
  componentDidMount() {
  }
  render(){
    return(
      <Router history={browserHistory}>
        <Route component={MainLayout}>
          <Route path={"/"} component={HomeContainer}>
            <Route path={"profile"} component={ProfileContainer}/>
            <Route path={"login"} component={LoginContainer}/>
            <Route path={"register"} component={RegisterContainer}/>
            </Route>
          </Route>
      </Router>
    );
  }
}

export default MyRouter;
