import React, {Component} from 'react';
import Home from '../components/Home';
import '../assets/stylesheets/home.scss';
import { ref, firebaseAuth } from '../helpers/database'

class HomeContainer extends Component {
  constructor(){
    super();
    this.state = {
      user: {}
    }
  }

  componentDidMount(){
    const userRef = ref.child("users/0");
    userRef.on('value', snap =>{
      this.setState({
        user: snap.val()
      })
    });
  }

  render(){
    return(
        <div>
          <Home user={this.state.user} />
        </div>
      );
    }
}

export default HomeContainer;
