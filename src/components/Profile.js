import React, {Component} from 'react';
import { ref } from '../helpers/database';

function UserGreeting(props){
  return <h1>Welcome Back {props.user.name}</h1>
}

function GuestGreeting(props){
  return <h1>Please {props.msg}</h1>
}

function Greeting(props){
  const isLoggedIn = props.isLoggedIn;
  if(isLoggedIn){
    return <UserGreeting user={props.user}/>
  }else{
    return <GuestGreeting msg="SIGN UP MF"/>

  }
}

class Profile extends Component {
  constructor(){
    super();
    this.state = {
      user: {name: ''}
    }
  }

componentDidMount(){
  const userRef = ref.child('users/0');
  userRef.on('value', snap =>{
    this.setState({
      user: snap.val()
    })
  });
}
render(){
  return(
    <div className="col-md-4">
      <p>This is the Profile Component!</p>
      <Greeting isLoggedIn={false} />
      <div className="col-md-3 mdb-color darken-2">
        <p>First: {this.state.user.first_name}</p>
        <p>Last: {this.state.user.last_name}</p>
        <p>Email: {this.state.user.email}</p>
        <p>City: {this.state.user.city}</p>
      </div>
    </div>
    );
  }
}

export default Profile;
