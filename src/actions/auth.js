import { firebaseAuth, ref} from '../helpers/database';
import { browserHistory } from 'react-router';
import _ from 'lodash';
import {
  AUTH_USER,
  SIGN_OUT_USER,
  AUTH_ERROR
} from './types';

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
  ref.child('users').child(userUid).set({info})
}


export function signOut() {
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
        console.log(user.uid)
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
