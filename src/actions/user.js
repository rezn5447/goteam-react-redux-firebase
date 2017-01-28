import { ref, firebaseAuth } from '../helpers/database';
import _ from 'lodash';
import {
  FETCH_USER_MATCHES,
  FETCH_USER_STATS,
  FETCH_USER,
} from './types';


export function fetchUser(){
  return dispatch => {
    ref.child(`users/0`).on('value', snapshot => {
      dispatch({
        type: FETCH_USER,
        payload: snapshot.val()
      });
      console.log(snapshot.val())
    });
  };
}

// export function fetchUserMatches(id){
//   return dispatch => {
//     ref.child(`users/${id}/matches`).on('value', snapshot => {
//       dispatch({
//         type: FETCH_USER_MATCHES,
//         payload: snapshot.val()
//       });
//     });
//   };
// }
//
// export function fetchUserStats(){
//   return dispatch => {
//     ref.child(`users/${id}/stats`).on('value', snapshot => {
//       dispatch({
//         type: FETCH_USER_STATS,
//         payload: snapshot.val()
//       });
//     });
//   };
// }
