import React, {Component} from 'react';
import Header from '../components/Header';
import '../assets/stylesheets/home.scss';


class Home extends Component {

render(){
  return(
    <div className="login-page-container">
    <Header />
      {this.props.children}
    </div>
    );
  }
}

export default Home;
