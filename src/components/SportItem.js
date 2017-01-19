import _ from 'lodash';


class SportItem extends Component {

render(){
  return(
    <li className="list-group-item">
      {this.props.sport}
    </li>
    );
  }
}

export default SportItem;
