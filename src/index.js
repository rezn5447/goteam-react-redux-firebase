import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './assets/stylesheets/index.scss';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import * as firebase from 'firebase';
import MyRouter from './router/Router';
// Initialize Firebase
var config = {
  apiKey: "AIzaSyDvOT5QjmhdDAxcNwqkt-XxVAE-A1pizpc",
  authDomain: "noteamjs.firebaseapp.com",
  databaseURL: "https://noteamjs.firebaseio.com",
  storageBucket: "noteamjs.appspot.com",
  messagingSenderId: "281549607804"
};
firebase.initializeApp(config);

ReactDOM.render(
  <MyRouter />,
  document.getElementById('root')
);
