import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/sports'
import _ from 'lodash';

class SportItem extends Component {

render(){
  return(
    <li className="list-group-item" id={this.props.id}>
       Category: {this.props.category} <br/>
       Type: {this.props.name} <br/>
       Total Players: {this.props.total_players}
    </li>
    );
  }
}

export default connect(null, actions)(SportItem);
