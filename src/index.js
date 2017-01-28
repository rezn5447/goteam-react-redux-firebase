import React from 'react';
import ReactDOM from 'react-dom';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import * as actions from './actions/auth';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

import userReducer from './reducers/user_reducer';
import sportReducer from './reducers/sport_reducer';
import authReducer from './reducers/auth_reducer';
import MyRouter from './router/Router';

import FontAwesome from 'react-fontawesome';
import './assets/stylesheets/index.scss';
import './assets/stylesheets/main_layout.scss';
import './assets/stylesheets/home.scss';
import './assets/stylesheets/matches.scss';
import './assets/stylesheets/score.scss';
import './assets/stylesheets/sports.scss';
import './assets/stylesheets/users.scss';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';


const reducers = combineReducers({
  form: reduxFormReducer, // mounted under "form"
  user: userReducer,
  sports: sportReducer,
  auth: authReducer
})

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
  <Provider store={store}>
  <MyRouter />
  </Provider>,
  document.getElementById('root')
);

// setup Firebase listeners

 // store.dispatch(actions.verifyAuth())
