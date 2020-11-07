import {
  ADD_PROJECT,
  UPDATE_PROJECT,
  AUTHORIZE_RENAME,
  REMOVE_PROJECT,
  SAVE_CHANGE,
  COMPLETE_PROJECT
} from '../actions/projectsActions'

const initialState = {
  all: []
}

// const project = {
//   id
//   title
//   title
//   startDate
//   endDate
//   allDay
//   isCompleted
//   notes
//   todos
//   heading
// }

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROJECT:
      return {
        ...state,
        all: [...state.all, action.newProject]
      }
    case REMOVE_PROJECT:
      return {
        ...state,
        all: state.all.filter(
          project => project.id !== action.projectToRemove.id
        )
      }
    case COMPLETE_PROJECT:
      const tmp_complete = state.all.map(project =>
        project.id === action.projectToComplete.id
          ? { ...project, isCompleted: !action.projectToComplete.isCompleted }
          : project
      )
      return {
        ...state,
        all: tmp_complete
      }
    case SAVE_CHANGE:
      const tmp_save = state.all.map(project =>
        project.id === action.updatedProject.id
          ? action.updatedProject
          : project
      )
      return {
        ...state,
        all: tmp_save
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
    default:
      return state
  }
}

export default reducer
