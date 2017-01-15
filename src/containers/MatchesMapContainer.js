import React, { Component } from 'react';
import MatchesMap from '../components/MatchesMap';
import { ref } from '../helpers/database';


class MatchesMapContainer extends Component {
  componentDidMount(){
    const matchesInAreaRef = ref.child("users/0/matches");
    matchesInAreaRef.on('value', snap =>{
      this.setState({
        matches: snap.val()
      })
    });
  }

  render () {
    return (
      <div className="MatchesMap-container">
        <p> You are in the Matches Map and Logged In! </p>
        <MatchesMap />
      </div>
    )
  }
}
export default MatchesMapContainer;
