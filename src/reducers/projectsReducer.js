import {
  ADD_PROJECT,
  UPDATE_PROJECT,
  REMOVE_PROJECT,
  ADD_HEADING,
  UPDATE_HEADING,
  REMOVE_HEADING,
  ADD_TODO,
  UPDATE_TODO
} from '../actions/projectsActions'

const initialState = {
  all: []
}

// all: [
//   {
//   id
//   title
//   startDate
//   endDate
//   allDay
//   notes
//   isCompleted
//   todos : [
//    {
//     id
//     headingId
//     todoTitle
//     todoNotes
//     title
//     isCompleted
//    }
//   ]
//   heading : [
//    {
//     id
//     headingTitle
//    }
//   ]
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
    case ADD_HEADING:
      return {
        ...state,
        all: state.all.map(project =>
          project.id === action.currentProject.id
            ? (project = {
                ...project,
                heading: [...project.heading, action.newHeading]
              })
            : project
        )
      }
    case UPDATE_HEADING:
      return {
        ...state,
        all: state.all.map(project =>
          project.id === action.updatedProject.id
            ? (project = {
                ...project,
                ...action.updatedProject
              })
            : project
        )
      }
    case REMOVE_HEADING:
      return {
        ...state,
        all: state.all.map(project =>
          project.id === action.updatedProject.id
            ? (project = {
                ...project,
                ...action.updatedProject
              })
            : project
        )
      }
    case ADD_TODO:
      const tmp = state.all.map(project => {
        if (project.id === action.currentProject.id) {
          let a = {
            ...project
          }
          a.todos[0].subItems = [...a.todos[0].subItems, action.newTodo]
          return a
        } else return project
      })
      return {
        ...state,
        all: tmp
      }
    case UPDATE_TODO:
      return {
        ...state,
        all: state.all.map(project =>
          project.id === action.updatedProject.id
            ? (project = {
                ...project,
                ...action.updatedProject
              })
            : project
        )
      }
    default:
      return state
  }
}

export default reducer
