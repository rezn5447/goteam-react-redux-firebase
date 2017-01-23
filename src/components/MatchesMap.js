import React, { Component } from 'react';
import { connect } from 'react-redux';

class MatchesMap extends Component {
  componentDidMount(){

  }

  render () {
    return (
      <div className="MatchesMap-container">
        <p> You are in the Matches Map and Logged In! </p>
      </div>
    )
  }
}

function mapStateToProps(state){
  console.log(state)
  return { matches: state.user.matches }

}
export default connect(mapStateToProps)(MatchesMap);
