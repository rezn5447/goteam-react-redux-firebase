import React, { Component } from 'react';
import SportItem  from '../components/SportItem';
import { ref } from '../helpers/database';
import _ from 'lodash';
import * as actions from '../actions/actions';

class SportsContainer extends Component {
  state = { sport: '' };

  componentWillMount(){
    this.props.fetchSports();
  }
  renderSports(){
    return _.map(this.props.sports, (sport,key) => {
      return <SportItem key={key} sport={sport} id={key} />
    });
  }
  render () {
    return (
      <ul className="list-group">
        {this.renderSports()}
      </ul>
    )
  }
}
export default SportsContainer;
