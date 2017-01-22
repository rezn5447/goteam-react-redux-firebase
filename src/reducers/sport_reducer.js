import _ from 'lodash';
import { FETCH_SPORTS } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_SPORTS:
      return action.payload;

    default: return state;
  }
}
