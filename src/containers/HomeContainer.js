import React, {Component} from 'react';
import Header from '../components/Header';
import '../assets/stylesheets/home.scss';

class HomeContainer extends Component {

render(){
  return(
      <div className="login-page-container">
        {this.props.children}
      </div>
    );
  }
}

export default HomeContainer;
