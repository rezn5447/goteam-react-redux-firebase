import React, {Component} from 'react';
import Header from '../components/Header';

class HomeContainer extends Component {

render(){
  return(
    <div className>
    <Header />
      {this.props.children}
    </div>
    );
  }
}

export default HomeContainer;
