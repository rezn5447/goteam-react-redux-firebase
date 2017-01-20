import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/sports';

class MatchItem extends Component {

  render(){
  return(
    <li className="list-group-item" id={this.props.id}>
       Type: {this.props.type} <br/>
       Time: {this.props.date} <br/>
       Place: {this.props.location}
    </li>
    );
  }
}

export default connect(null, actions)(MatchItem);
