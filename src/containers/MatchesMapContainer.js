import React, { Component } from 'react';
import MatchesMap from '../components/MatchesMap';
import { ref } from '../helpers/database';


class MatchesMapContainer extends Component {
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
