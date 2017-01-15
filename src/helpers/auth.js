import { ref, firebaseAuth } from './database'

export function auth (email, pw) {
  return firebaseAuth().createUserWithEmailAndPassword(email, pw)
    .then(saveUser)
    .catch((error) => console.log('Oops', error))
}

export function register (values) {
  return firebaseAuth().createUserWithEmailAndPassword(values.email, values.pw)
    .then(login)
    .catch((error) => console.log('Oops', error))
}
export function logout () {
  return firebaseAuth().signOut()
}

export function login (values) {
  return firebaseAuth().signInWithEmailAndPassword(values.email, values.pw)
  .then(console.log(firebaseAuth().currentUser.uid))
}

export function saveUser (values) {
  const userID = firebaseAuth().currentUser.uid
  console.log(values)
  return ref.child('users/' + userID)
     .set({
      // first_name:  values.first_name,
      // last_name:   values.last_name,
      // street:      values.street,
      // city:        values.city,
      // state:       values.state,
      // zip:         values.zip,
      // email:       values.email
    })
    .then(() => values)
}
