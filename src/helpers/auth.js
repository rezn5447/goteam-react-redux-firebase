import { ref, firebaseAuth } from './database'

export function auth (email, pw) {
  return firebaseAuth().createUserWithEmailAndPassword(email, pw)
    .then(saveUser)
    .catch((error) => console.log('Oops', error))
}

export function register (values) {
  return firebaseAuth().createUserWithEmailAndPassword(values.email, values.pw)
    .then(saveUser)
    .catch((error) => console.log('Oops', error))
}
export function logout () {
  return firebaseAuth().signOut()
}

export function login (email, pw) {
  return firebaseAuth().signInWithEmailAndPassword(email, pw)
}

export function saveUser (user) {
  return ref.child(`users/${user.uid}`)
    .set({
      uid:         user.uid,
      first_name:  user.first_name,
      last_name:   user.last_name,
      street:      user.street,
      city:        user.city,
      state:       user.state,
      zip:         user.zip,
      email:       user.email
    })
    .then(() => user)
}
