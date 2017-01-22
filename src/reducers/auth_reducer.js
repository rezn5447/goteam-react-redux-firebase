import _ from 'lodash';
import {
  FETCH_CURRENT_USER,
  SIGN_IN,
  SIGN_OUT
} from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_CURRENT_USER:
      return action.payload;
    case SIGN_IN:
      return action.payload;
    case SIGN_OUT:
      return action.payload;

    default: return state;
  }
}
