import { ref, firebaseAuth } from './database'

export function auth (email, pw) {
  return firebaseAuth().createUserWithEmailAndPassword(email, pw)
    .then(saveUser)
    .catch((error) => console.log('Oops', error))
}

export function register (values) {
  return firebaseAuth().createUserWithEmailAndPassword(values.email, values.pw)
    .then(console.log(values))
    .catch((error) => console.log('Oops', error))
}
export function logout () {
  return firebaseAuth().signOut()
}

export function login (values) {
  return firebaseAuth().signInWithEmailAndPassword(values.email, values.pw)
  .then(console.log(firebaseAuth().currentUser.uid))
}

export function saveUser (profile) {
  const userID = firebaseAuth().currentUser.uid
  const matches = {}
  ref.child('users/' + userID)
      .set({
      profile,
      matches
    })
    .then(() => profile, matches)
}
