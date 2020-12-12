import { combineReducers } from 'redux'
import projectsReducer from './projectsReducer'

import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'

const mainReducer = combineReducers({
  projects: projectsReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer
})

export default mainReducer
