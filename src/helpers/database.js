import * as firebase from 'firebase'
var config = {
  apiKey: "AIzaSyDvOT5QjmhdDAxcNwqkt-XxVAE-A1pizpc",
  authDomain: "noteamjs.firebaseapp.com",
  databaseURL: "https://noteamjs.firebaseio.com",
  storageBucket: "noteamjs.appspot.com",
  messagingSenderId: "281549607804"
};
const firebaseDB = firebase.initializeApp(config);


export default firebaseDB
