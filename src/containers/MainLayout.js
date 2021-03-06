import React, { Component } from 'react';
import Header from '../components/Header';
import '../assets/stylesheets/header.scss';
import '../assets/stylesheets/main_layout.scss';
import '../assets/stylesheets/register.scss';

class MainLayout extends Component {

  render() {
    return (
      <div className="MainLayout">
        <Header />
        <main>
          {this.props.children}
        </main>
          <footer className="footer">
            <div className="container">
              <p> Converted to React from the original final project hosted on </p>
              <a href="http://dbc-goteam.herokuapp.com/">
              <p>http://dbc-goteam.herokuapp.com/</p></a>
            </div>
          </footer>
      </div>
    );
  }
}
export default MainLayout;
