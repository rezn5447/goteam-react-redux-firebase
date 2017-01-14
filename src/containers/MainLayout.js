import React, { Component } from 'react';
import '../assets/stylesheets/main_layout.scss';
import { ref } from '../helpers/database';
import Header from '../components/Header';


class MainLayout extends Component {
  constructor(){
    super();
    this.state = {
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
