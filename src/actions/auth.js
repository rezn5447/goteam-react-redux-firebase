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
    .then(dispatch({
      type: SIGN_IN,
      payload: {authed : true}
    }));
   }
}
export function signOut(){
  return dispatch => {
    firebaseAuth.signOut()
    .then(dispatch({
      type: SIGN_OUT,
      payload: {authed : false}
    }));
   }
}
