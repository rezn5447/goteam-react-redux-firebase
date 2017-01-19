import React, {Component} from 'react';
import { Router, Route, browserHistory } from 'react-router';
import ProfileContainer from '../containers/ProfileContainer';
import HomeContainer from '../containers/HomeContainer';
import RegisterContainer from '../containers/RegisterContainer';
import SportsContainer from '../containers/SportsContainer';
import FindMatchesContainer from '../containers/FindMatchesContainer';
import MainLayout from '../containers/MainLayout';

class MyRouter extends Component {
  componentDidMount() {
  }
  render(){
    return(
      <Router history={browserHistory}>
        <Route component={MainLayout}>
          <Route path={"/"} component={HomeContainer} />
          <Route path={"register"} component={RegisterContainer} />
          <Route path={"sports"} component={SportsContainer} />
          <Route path={"profile"} component={ProfileContainer} >
            <Route path={"findmatches"} component={FindMatchesContainer}/>
          </Route>
        </Route>
      </Router>
    );
  }
}

export default MyRouter;
