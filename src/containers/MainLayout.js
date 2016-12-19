import React, { Component } from 'react';
import logo from '../assets/images/logo.svg';
import '../assets/stylesheets/App.scss';
import Header from '../components/Header'
class MainLayout extends Component {
  render() {
    return (
      <div className="App">
      <Header />
        <div className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React! You are going 45 mph!</h2>
        </div>
        <main>
        {this.props.children}
        </main>
      </div>
    );
  }
}
export default MainLayout;
