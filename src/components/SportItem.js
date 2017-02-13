import React from 'react';

export const SportItem = (props) => {
  return (
    <li className="list-group-item" id={this.props.id}>
       Category: {this.props.category} <br/>
       Type: {this.props.name} <br/>
       Total Players: {this.props.total_players}
    </li>
  );
};
