import 'regenerator-runtime/runtime'
import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import mainReducer from './reducers/mainReducer'
import App from './containers/App'

const store = createStore(mainReducer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
