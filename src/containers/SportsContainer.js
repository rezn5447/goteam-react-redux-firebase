import React, { Component } from 'react';
import { connect } from 'react-redux';
import SportItem  from '../components/SportItem';
import _ from 'lodash';
import * as actions from '../actions/sports';

class SportsContainer extends Component {
  state = { sports: '' };

  componentWillMount(){
    this.props.fetchSports();
  }
//I'm having some trouble grabbing the values using rendersports...
  renderSports(){
    return _.map(this.props.sports, (name,id,category,total_players) => {
      return <SportItem id={id} name={name} category={category} total_players={total_players} />
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
  return { sports: state.sports };
}

export default connect(mapStateToProps, actions)(SportsContainer);
