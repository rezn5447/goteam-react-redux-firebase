import _ from 'lodash';
import {
  AUTH_USER,
  SIGN_OUT_USER,
  AUTH_ERROR
} from '../actions/types';

const initialState =  {
  authenticated: false,
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case AUTH_USER:
      return {...state, ...action.payload };
    case SIGN_OUT_USER:
      return {...state, ...action.payload };
    case AUTH_ERROR:
      return {...state, ...action.payload };

    default: return state;
  }
}
