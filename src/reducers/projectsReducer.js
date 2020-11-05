import {
  ADD_PROJECT,
  UPDATE_PROJECT,
  REMOVE_PROJECT,
  SAVE_CHANGE
} from '../actions/projectsActions'

const initialState = {
  all: []
}

// const project = {
//   id
//   text
//   dateStart
//   isCompleted
//   defaultText
// }

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROJECT:
      console.log('reducer', action.newProject)
      return {
        ...state,
        all: [...state.all, action.newProject]
      }
    case UPDATE_PROJECT:
      const tmp_update = state.all
      const index = state.all.findIndex(
        project => project.id === action.updatedProject.id
      )
      tmp_update[index] = { ...tmp_update[index], ...action.updatedProject }
      return {
        ...state,
        all: tmp_update
      }
    case SAVE_CHANGE:
      const tmp_save = state.all.map(
        project => (project = { ...project, defaultText: false })
      )
      return {
        ...state,
        all: tmp_save
      }
    case REMOVE_PROJECT:
      return {
        ...state,
        all: state.all.filter(
          project => project.id !== action.projectToRemove.id
        )
      }
    default:
      return state
  }
}

export default reducer
