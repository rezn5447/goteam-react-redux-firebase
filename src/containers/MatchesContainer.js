import React, { Component } from 'react';
import Matches  from '../components/Matches';
import { ref } from '../helpers/database';


class MatchesContainer extends Component {
  state = { match: '' };

  componentWillMount(){
    this.props.fetchMatches();
  }
  render () {
    return (
      <div className=" ">
        <Matches />
      </div>
    )
  }
}
export default MatchesContainer;
