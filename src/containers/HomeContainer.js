import React, {Component} from 'react';
import Home from '../components/Home';
import '../assets/stylesheets/home.scss';


class HomeContainer extends Component {

  render(){
    return(
        <div>
          <Home user={this.state.user} />
        </div>
      );
    }
}

export default HomeContainer;
