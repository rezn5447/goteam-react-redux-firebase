import _ from 'lodash';
import {
  FETCH_USER,
  CREATE_USER,
  DELETE_USER
} from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_USER:
      return action.payload;
    case CREATE_USER:
      return {...state, ...action.payload};
    case DELETE_USER:
      return _.omit(state, action.payload);  
  }
  return state;
}
