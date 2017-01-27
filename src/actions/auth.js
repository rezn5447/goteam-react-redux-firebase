import { firebaseAuth, ref} from '../helpers/database';
import { browserHistory } from 'react-router';
import _ from 'lodash';
import {
  FETCH_USER,
  AUTH_USER,
  SIGN_OUT_USER,
  AUTH_ERROR
} from './types';

export function fetchUser(){
  var user = firebaseAuth.currentUser.uid;
  return function(dispatch) {
    console.log(`jfdkl;asfjkldj;ads   ${user}`)
    ref.child("users").child(user).on('value', snapshot => {
      dispatch({
        type: FETCH_USER,
        payload: snapshot.val()
      });
      console.log(snapshot.val())
    });
  };
}

export function signIn(values){
  return dispatch => {
    firebaseAuth.signInWithEmailAndPassword(values.email, values.pw)
    .then(response => {
      const userUid = firebaseAuth.currentUser.uid;
      dispatch(authUser());
      browserHistory.push(`/users/${userUid}`);
    })
    .catch(error => {
      console.log(error);
      dispatch(authError(error));
    });
   }
}

export function registerUser(values){
  return dispatch => {
    firebaseAuth.createUserWithEmailAndPassword(values.email, values.pw)
    .then(response => {
      dispatch(authUser());
      const userUid = firebaseAuth.currentUser.uid;
      saveUserInfo(values, userUid)
      browserHistory.push(`users/${userUid}`);
    })
    .catch(error => {
      console.log(error);
      dispatch(authError(error));
    });
   }
}

export function pushToProfile(){
    const userUid = firebaseAuth.currentUser.uid;
    browserHistory.push(`/users/${userUid}`);
}

export function saveUserInfo(info,userUid){
  ref.child('users').child(userUid).child('info').set({
    first_name: info.first_name,
    last_name : info.last_name,
    email: info.email,
    street: info.street,
    city  : info.city,
    state: info.state,
    password: info.pw,
    uid: userUid,
    matches: {}
  })
}

export function signOut() {
  firebaseAuth.signOut();
  browserHistory.push('/login');

  return {
    type: SIGN_OUT_USER,
    payload: { authenticated: false }
  }
}

export function verifyAuth(){
  return dispatch => {
    firebaseAuth.onAuthStateChanged( user =>{
      if(user){
        const userUID = user.uid;
        console.log(`still logged in with user ${userUID}`)
        dispatch(authUser())
      } else {
        console.log("No user")
        dispatch(signOut())
      }
    })
  }
}

export function authUser() {
  return {
    type: AUTH_USER,
    payload: { authenticated: true }
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}
