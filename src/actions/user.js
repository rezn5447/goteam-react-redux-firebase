import { ref } from '../helpers/database';
import _ from 'lodash';
import {
  FETCH_USER,
  UPDATE_USER,
  DELETE_POST,
  CREATE_USER
} from './types';

const userRef = ref.child('users/0');

export function fetchUser(){
  return dispatch => {
    userRef.on('value', snapshot => {
      dispatch({
        type: FETCH_USER,
        payload: snapshot.val()
      });
      console.log(snapshot.val())
    });
  };
}
