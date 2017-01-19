import React, { Component } from 'react';
import { connect } from 'react-redux';
import SportItem  from '../components/SportItem';
import _ from 'lodash';
import * as actions from '../actions/sports';

class SportsContainer extends Component {
  componentWillMount(){
    this.props.fetchSports();
  }
//I'm having some trouble grabbing the values using rendersports...
  renderSports(){
    return _.map(this.props.sports, (sport,key) => {
      return <SportItem key={key} name={sport.name} category={sport.category} total_players={sport.total_players}  id={sport.id} />
    });
  }

  render () {
    return (
      <div>
        <ul className="list-group">
          {this.renderSports()}
          hello??
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state)
  return { sports: state.sports };

}

export default connect(mapStateToProps, actions)(SportsContainer);
