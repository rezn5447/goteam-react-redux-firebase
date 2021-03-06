import { ref } from '../helpers/database';
import _ from 'lodash';
import {
  FETCH_SPORTS
} from './types';

const sportsRef = ref.child('sports');

export function fetchSports(){
  return dispatch => {
    sportsRef.on('child_added', snapshot => {
      dispatch({
        type: FETCH_SPORTS,
        payload: snapshot.val()
      });
    });
  };
}
