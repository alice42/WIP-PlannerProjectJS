import {
  ADD_PROJECT,
  UPDATE_PROJECT,
  REMOVE_PROJECT,
  COMPLETE_PROJECT
} from '../actions/projectsActions'

const initialState = {
  all: []
}

// const project = {
//   id
//   title
//   startDate
//   endDate
//   allDay
//   notes
//   isCompleted
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
    case UPDATE_PROJECT:
      const tmp_updated = state.all.map(project =>
        project.id === action.updatedProject.id
          ? action.updatedProject
          : project
      )
      return {
        ...state,
        all: tmp_updated
      }
    default:
      return state
  }
}

export default reducer
