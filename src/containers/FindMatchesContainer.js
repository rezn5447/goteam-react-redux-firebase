import React, { Component } from 'react';
import { ref } from '../helpers/database';


class FindMatchesContainer extends Component {
  render () {
    return (
      <div className=" ">
        <FindMatches />
      </div>
    )
  }
}
export default FindMatchesContainer;
