import React, {Component} from 'react';
import Header from '../components/Header';

class Home extends Component {

render(){
  return(
    <div>
    <Header />
      {this.props.children}
    </div>
    );
  }
}

export default Home;
