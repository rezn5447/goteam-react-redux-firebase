import React, { Component } from 'react';
import * as firebase from 'firebase';

class AddItem extends Component {
  handleSubmit(e){
    e.preventDefault();

    const rootRef = firebase.database().ref();

    rootRef.child('item').push({
      name: this.state.name.value,
      email: this.state.email.value,
      item: this.state.item.value
    });

  // resetting everything back to empty
    this.setState({name: '', email: '', item: ''})
  }

  render() {
      return (
      <div className="col-md-">
        <form>
          <label>Name</label>
          <input name="name" /><br /><br />
          <label>Email</label>
          <input name="email" /><br /><br />
          <label>Item</label>
          <input name="item" /><br /><br />
          <input type='submit' value="Submit" onClick={() => this.handleSubmit()}/>
        </form>
      </div>
    );
  }
}

export default AddItem;
