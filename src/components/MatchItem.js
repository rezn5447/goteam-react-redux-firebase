import React from 'react';

export const MatchItem = (props) => {
  return (
    <li className="list-group-item" id={this.props.id}>
       Type: {this.props.type} <br/>
       Time: {this.props.date} <br/>
       Place: {this.props.location}
    </li>
  );
}
