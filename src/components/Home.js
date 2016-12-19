import React, {Component} from 'react';

class Home extends Component {

render(){
  return(
    <div className="container">
      <p>Maybe this will work</p>
      {this.props.children}
    </div>
    );
  }
}

export default Home;
