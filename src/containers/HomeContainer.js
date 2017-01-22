import React, {Component} from 'react';
import Home from '../components/Home';
import '../assets/stylesheets/home.scss';


class HomeContainer extends Component {

  render(){
    return(
        <div id="1-contain">
          <Home />
        </div>
      );
    }
}

export default HomeContainer;
