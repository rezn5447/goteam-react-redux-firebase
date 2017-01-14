import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formreducer } from 'redux-form';
import logger from 'redux-logger';
import math from './reducers/mathReducer';
import user from './reducers/userReducer';

export default myStore = createStore(
  combineReducers({
    math,
    user
  }),
  {},
  applyMiddleware(logger())
);
