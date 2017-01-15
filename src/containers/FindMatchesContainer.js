import React, { Component } from 'react';
import { ref } from '../helpers/database';


class FindMatchesContainer extends Component {
  componentDidMount(){
    const matchesRef = ref.child("matches");
    matchesRef.on('value', snap =>{
      this.setState({
        matches: snap.val()
      })
    });
  }

  render () {
    return (
      <div className=" ">
      
      </div>
    )
  }
}
export default FindMatchesContainer;
