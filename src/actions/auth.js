import { ref, firebaseAuth } from '../helpers/database';
import _ from 'lodash';
import {
  FETCH_CURRENT_USER,
  SIGN_OUT,
  SIGN_IN
} from './types';

const userRef = ref.child('users/0');

export function createSession(values){
  return dispatch => {
    userRef.on('value', snapshot => {
      dispatch({
        type: FETCH_CURRENT_USER,
        payload: snapshot.val()
      });
    });
  };
}

export function signIn(values){
  return dispatch => {
    firebaseAuth.signInWithEmailAndPassword(values.email, values.pw)

   }
}

export function signOut(){
  return dispatch => {
    firebaseAuth.signOut()
    // .then(function dispatch({
    //   type: SIGN_OUT,
    //   payload: {authed : false}
    // }));
   }
}
