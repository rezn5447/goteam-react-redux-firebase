import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import * as Actions from '../actions';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

import userReducer from './reducers/user_reducer';
import sportReducer from './reducers/sport_reducer';
import authReducer from './reducers/auth_reducer';
import MyRouter from './router/Router';


export const store = createStore(
  combineReducers({
    form: reduxFormReducer, // mounted under "form"
    user: userReducer,
    sports: sportReducer,
    authenticated: authReducer })
);
