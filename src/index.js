import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import reduxThunk from 'redux-thunk';
import userReducer from './reducers/user_reducer';
import MyRouter from './router/Router';


import './assets/stylesheets/index.scss';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';


const reducers = combineReducers({
  form: reduxFormReducer, // mounted under "form"
  user: userReducer
})

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  <MyRouter />
  </Provider>,
  document.getElementById('root')
);
