import { combineReducers } from 'redux'
import userReducer from './userReducer'
import dataReducer from './dataReducer'

const mainReducer = combineReducers({
  user: userReducer,
  data: dataReducer
})

export default mainReducer
