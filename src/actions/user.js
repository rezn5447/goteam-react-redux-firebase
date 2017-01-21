import { ref } from '../helpers/database';
import _ from 'lodash';
import {
  FETCH_USER,
  UPDATE_USER,
  CREATE_USER
} from './types';
import {
  FETCH_USER_MATCHES,
  UPDATE_USER_MATCHES,
  FETCH_USER_STATS,
  UPDATE_USER_STATS
} from './types';

const userRef = ref.child('users/0');
const userMatchesRef = ref.child('users/0/matches')

export function fetchUser(){
  return dispatch => {
    userRef.on('value', snapshot => {
      dispatch({
        type: FETCH_USER,
        payload: snapshot.val()
      });
    });
  };
}

export function fetchUserMatches(){
  return dispatch => {
    userMatchesRef.on('value', snapshot => {
      dispatch({
        type: FETCH_USER_MATCHES,
        payload: snapshot.val()
      });
      console.log(snapshot.val())
    });
  };
}

export function fetchUserStats(){
  return dispatch => {
    userRef.on('value', snapshot => {
      dispatch({
        type: FETCH_USER_STATS,
        payload: snapshot.val()
      });
    });
  };
}
