import React, { Component } from 'react';
import logo from '../assets/images/logo.svg';
import '../assets/stylesheets/App.scss';
import { ref } from '../helpers/database';
import Header from '../components/Header';


class MainLayout extends Component {
  constructor(){
    super();
    this.state = {
      speed: 10,
      user: {}
    };
  }

  componentDidMount() {
    const speedRef = ref.child('speed');
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
