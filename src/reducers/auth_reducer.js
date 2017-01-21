import _ from 'lodash';
import {
  FETCH_CURRENT_USER,
  CREATE_SESSION,
  DELETE_SESSION
} from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_CURRENT_USER:
      return action.payload;
    case CREATE_SESSION:
      return {...state, ...action.payload};
    case DELETE_SESSION:
      return _.omit(state, action.payload);
  }
  return state;
}
