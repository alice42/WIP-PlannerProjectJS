import React from 'react'

import { useFirebase } from 'react-redux-firebase'
import { useHistory } from 'react-router-dom'
const SignIn = () => {
  const firebase = useFirebase()
  const history = useHistory()

  const signInWithGoogle = () => {
    firebase
      .login({
        provider: 'google',
        type: 'popup'
      })
      .then(() => {
        history.push('/projects')
      })
  }

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      history.push('/projects')
    } else history.push('/')
  })

  return (
    <div>
      <h1>Sign In</h1>
      <button
        onClick={event => {
          event.preventDefault()
          signInWithGoogle()
        }}
      >
        Sign In with Google
      </button>
    </div>
  )
}
export default SignIn
