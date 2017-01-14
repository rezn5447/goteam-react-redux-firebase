import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import './assets/stylesheets/index.scss';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import MyRouter from './router/Router';

const reducer = combineReducers({
  form: reduxFormReducer // mounted under "form"
})
const store = (createStore)(reducer)

ReactDOM.render(
  <Provider store={store}>
  <MyRouter />
  </Provider>,
  document.getElementById('root')
);
