import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import * as firebase from 'firebase';
import logo from './assets/images/logo.svg';
import './assets/stylesheets/App.scss';

class App extends Component {
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
    const userRef = rootRef.child('users/user1')

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


  render() {
    return (
      <div className="App">
      
      </div>
    );
  }
}
export default App;
