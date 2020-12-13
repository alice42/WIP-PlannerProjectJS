import React from 'react'
import ReactDOM from 'react-dom'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { createFirestoreInstance } from 'redux-firestore'
import mainReducer from './reducers/mainReducer'
import App from './containers/App'
import { StylesProvider } from '@material-ui/core/styles'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme()

const firebaseConfig = {
  apiKey: 'AIzaSyAXl3gF8A_eaw4F3tmYKPmrNKTQ_UEa9RY',
  authDomain: 'planner-f1140.firebaseapp.com',
  databaseURL: 'https://planner-f1140.firebaseio.com',
  projectId: 'planner-f1140',
  storageBucket: 'planner-f1140.appspot.com',
  messagingSenderId: '530661616009',
  appId: '1:530661616009:web:209c958bda42ebd0309958',
  measurementId: 'G-3J2WVV37YB'
}

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true
}

firebase.initializeApp(firebaseConfig)
firebase.firestore()

const initialState = {}

const store = createStore(mainReducer, initialState)

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance //since we are using Firestore
}

ReactDOM.render(
  // <React.StrictMode>
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <StylesProvider injectFirst>
          <App />
        </StylesProvider>
      </ReactReduxFirebaseProvider>
    </Provider>
  </MuiThemeProvider>,
  // </React.StrictMode>,
  document.getElementById('root')
)
