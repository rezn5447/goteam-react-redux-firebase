import React, {Component} from 'react';
import { Router, Route, browserHistory } from "react-router";
import Profile from '../components/Profile'
import Home from '../components/Home'
import Login from '../components/Login'
import RegisterContainer from '../containers/RegisterContainer'
import MainLayout from "../containers/MainLayout"

class MyRouter extends Component {
  componentDidMount() {
  }
  render(){
    return(
      <Router history={browserHistory}>
        <Route component={MainLayout}>
          <Route path={"/"} component={Home}>
            <Route path={"profile"} component={Profile}/>
            <Route path={"login"} component={Login}/>
            <Route path={"register"} component={RegisterContainer}/>
            </Route>
          </Route>
      </Router>
    );
  }
}

export default MyRouter;
