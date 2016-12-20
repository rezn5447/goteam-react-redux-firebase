import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './assets/stylesheets/index.scss';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import * as firebase from 'firebase';
import MyRouter from './router/Router';


ReactDOM.render(
  <MyRouter />,
  document.getElementById('root')
);
