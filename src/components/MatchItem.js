import React from 'react';
import Link from 'react-router';
import FontAwesome from 'react-fontawesome';
import soccer from '../assets/images/sport_icons/soccer.svg';
import tennis from '../assets/images/sport_icons/tennis-ball.svg';
import badminton from '../assets/images/sport_icons/badminton.svg';
import table_tennis from '../assets/images/sport_icons/ping-pong.svg';
import basketball from '../assets/images/sport_icons/basketball.svg';
import bowling from '../assets/images/sport_icons/bowling.svg';
import volleyball from '../assets/images/sport_icons/volleyball.svg';




export const MatchItem = (props) => {
  return (
    <div className="match-details-container card card-block" id={this.props.id}>
    <img src={this.props.type} alt={this.props.type} />
      <div className="details-container card-text">
        <FontAwesome className="fa fa-map-marker" name="" aria-hidden="true"/>
          {this.props.location}<br/>
        <FontAwesome className="fa fa-clock-o" name="" aria-hidden="true"/>
          {this.props.date}<br/>
        <FontAwesome className="fa fa-question-circle" name="" aria-hidden="true"/>
        <Link to={'/details'}>Details</Link>
      </div>
    </div>
  );
}
