import React, { Component } from 'react';
import * as firebase from 'firebase';


function LoginBtn(props){
  return (
    <button id="btnLogin" className="btn btn-action" onClick={() => props.onClick()}>
      Log in
    </button>
  );
}

class AddUser extends Component {
  constructor(){
    super();
    this.state = {
        name: "",
        password: "",
        email: ""
    };
  }

  handleSubmit(e){
    e.preventDefault();
    const rootRef = firebase.database().ref();
    const auth    = firebase.auth();
    const email   = this.state.email.value
    const password= this.state.password.value
    const promise = auth.signInWithEmailAndPassword(email, password);
    promise.catch(e => console.log(e.message));

  // pushing data to the firebase database
    rootRef.push({
      email: email,
      password: password
    });

  // resetting everything back to empty
    this.setState({email: '', password: ''})
  }

  render() {
    return (
      <div className="col-md-4">
        <form>
          <label>Email</label>
          <input id="txtEmail" type="email" name="email" /><br /><br />
          <label>Item</label>
          <input id="txtPassword" type="password" name="password" /><br /><br />
          <LoginBtn onClick={() => this.handleSubmit()}/>
        </form>
      </div>
    );
  }
}

export default AddUser;
