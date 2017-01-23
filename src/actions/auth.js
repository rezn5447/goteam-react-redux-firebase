import { firebaseAuth } from '../helpers/database';
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
      console.log(response)
      dispatch(authUser());
      browserHistory.push('users/:user_ID');
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
      browserHistory.push('users/:user_ID');
    })
    .catch(error => {
      console.log(error);
      dispatch(authError(error));
    });
   }
}

export function signOut() {
  browserHistory.push('login');

  return {
    type: SIGN_OUT_USER,
    payload: { authenticated: false }
  }
}

export function verifyAuth(){
  return dispatch => {
    firebaseAuth.onAuthStateChanged( user =>{
      if(user){
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
