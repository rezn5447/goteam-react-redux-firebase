import React, {Component} from 'react';
import { Router, Route, Link, browserHistory } from "react-router";
import { connect } from 'react-redux';
import * as firebase from 'firebase';
import Profile from '../profile/Profile'
import Home from '../components/Home'
import Login from '../components/Login'
import Register from '../components/Register'
import User from '../profile/User'
import MainLayout from "../containers/MainLayout"

class MyRouter extends Component {
constructor(){
    super();
    this.state={
      speed: 10,
      user: {}
    };
  }
  componentDidMount() {
    // root reference to my Firebase databaseURL
    const rootRef = firebase.database().ref();
    const speedRef = rootRef.child('speed');
    const userRef = rootRef.child('users/0')

    // this is how firebase syncs data in real time
    userRef.on('value', snap => {
      this.setState({
        user: snap.val()
      });
    });
    speedRef.on('value', snap => {
      this.setState({
        speed: snap.val()
      });
    });
  }
render(){
  return(
    <Router history={browserHistory}>
      <Route component={MainLayout}>
        <Route path={"/"} component={Home}>
          <Route path={"profile"} component={Profile}/>
          <Route path={"login"} component={Login}/>
          <Route path={"register"} component={Register}/>
          <Route path={"users/:id"} component={Profile}/>
        </Route>
      </Route>
    </Router>
    );
  }
}

export default MyRouter;
