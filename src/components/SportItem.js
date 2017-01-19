import {React, Component} from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

class SportItem extends Component {

render(){
  return(
    <li className="list-group-item">
      {this.props.sport} hkflejal
    </li>
    );
  }
}

export default connect(null)(SportItem);
