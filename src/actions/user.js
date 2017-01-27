import { ref, firebaseAuth } from '../helpers/database';
import _ from 'lodash';
import {
  FETCH_USER,
  FETCH_USER_MATCHES,
  FETCH_USER_STATS,
} from './types';


export function fetchUser(){
  return dispatch => {
    let id = firebaseAuth.currentUser.uid
    ref.child(`users/${id}`).on('value', snapshot => {
      dispatch({
        type: FETCH_USER,
        payload: snapshot.val()
      });
    });
  };
}

export function fetchUserMatches(){
  return dispatch => {
    let id = firebaseAuth.currentUser.uid
    ref.child(`users/${id}/matches`).on('value', snapshot => {
      dispatch({
        type: FETCH_USER_MATCHES,
        payload: snapshot.val()
      });
    });
  };
}

export function fetchUserStats(){
  return dispatch => {
    let id = firebaseAuth.currentUser.uid
    ref.child(`users/${id}/stats`).on('value', snapshot => {
      dispatch({
        type: FETCH_USER_STATS,
        payload: snapshot.val()
      });
    });
  };
}
