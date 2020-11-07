import {
  ADD_PROJECT,
  UPDATE_PROJECT,
  REMOVE_PROJECT
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
    case UPDATE_PROJECT:
      return {
        ...state,
        all: state.all.map(project =>
          project.id === action.updatedProject.id
            ? action.updatedProject
            : project
        )
      }
    default:
      return state
  }
}

export default reducer
