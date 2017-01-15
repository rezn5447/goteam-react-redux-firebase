import React, {Component} from 'react';
import Home from '../components/Home';
import '../assets/stylesheets/home.scss';
import firebaseAuth from '../helpers/database'

class HomeContainer extends Component {
  componentDidMount () {
    this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
          user: user
        })
      } else {
        this.setState({
          loading: false
        })
      }
    })
  }
  componentWillUnmount () {
    this.removeListener()
  }
render(){
  return(
      <div>
        <Home authed={this.state.authed} user={this.state.user} />
      </div>
    );
  }
}

export default HomeContainer;
