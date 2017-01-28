import React, { Component } from 'react';
import { connect } from 'react-redux';
import SportItem  from '../components/SportItem';
import _ from 'lodash';
import * as actions from '../actions/sports';

class Sports extends Component {
  componentWillMount(){
    this.props.fetchSports();
  }

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
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { sports: state.sports,
            user:  state.user   }

}

export default connect(mapStateToProps, actions)(Sports);
