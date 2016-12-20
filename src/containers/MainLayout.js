import React, { Component } from 'react';
import logo from '../assets/images/logo.svg';
import '../assets/stylesheets/App.scss';
import * as firebase from 'firebase';

import Header from '../components/Header'

var config = {
  apiKey: "AIzaSyDvOT5QjmhdDAxcNwqkt-XxVAE-A1pizpc",
  authDomain: "noteamjs.firebaseapp.com",
  databaseURL: "https://noteamjs.firebaseio.com",
  storageBucket: "noteamjs.appspot.com",
  messagingSenderId: "281549607804"
};
const firebaseDB = firebase.initializeApp(config);


class MainLayout extends Component {
  constructor(){
    super();
    this.state = {
      speed: 10,
      user: {}
    };
  }

  componentDidMount() {
    // root reference to my Firebase databaseURL
    const rootRef = firebaseDB.database().ref();
    const speedRef = rootRef.child('speed');
    const userRef = rootRef.child('users/0')

    // this is how firebase syncs data in real time
    speedRef.on('value', snap => {
      this.setState({
        speed: snap.val()
      });
    });
  }
  render() {
    return (
      <div className="App">
      <Header />
        <div className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React! You are going {this.state.speed} mph!</h2>
        </div>
        <main>
        {this.props.children}
        </main>
      </div>
    );
  }
}
export default MainLayout;
