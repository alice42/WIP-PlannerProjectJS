import { combineReducers } from 'redux'
import projectsReducer from './projectsReducer'

const mainReducer = combineReducers({
  projects: projectsReducer
})

export default mainReducer
