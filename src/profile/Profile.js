import React, {Component} from 'react';

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
      user: {}
    }
  }

componentDidMount(){
  const userRef = ref.child('user/0');
  
}
render(){
  return(
    <div className="col-md-4">
      <p>This is the Profile Component!</p>
      <Greeting isLoggedIn={false} />
    </div>
    );
  }
}

export default Profile;
