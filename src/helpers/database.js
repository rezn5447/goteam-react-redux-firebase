import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyDvOT5QjmhdDAxcNwqkt-XxVAE-A1pizpc",
  authDomain: "noteamjs.firebaseapp.com",
  databaseURL: "https://noteamjs.firebaseio.com",
  storageBucket: "noteamjs.appspot.com",
  messagingSenderId: "281549607804"
};

firebase.initializeApp(config);

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
