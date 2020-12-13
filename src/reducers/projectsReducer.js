import { CONSTANTS } from '../actions/projectsActions'
import uuid from 'react-uuid'

const initialState = {
  all: [],
  lists: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // case CONSTANTS.ADD_PROJECT:
    //   return {
    //     ...state,
    //     all: [...state.all, action.newProject]
    //   }
    // case CONSTANTS.REMOVE_PROJECT:
    //   return {
    //     ...state,
    //     all: state.all.filter(
    //       project => project.id !== action.projectToRemove.id
    //     )
    //   }
    // case CONSTANTS.UPDATE_PROJECT:
    //   return {
    //     ...state,
    //     all: state.all.map(project =>
    //       project.id === action.updatedProject.id
    //         ? action.updatedProject
    //         : project
    //     )
    //   }

    // case CONSTANTS.ADD_LIST:
    //   const newList = {
    //     title: action.payload,
    //     cards: [],
    //     id: `heading_${uuid()}`
    //   }
    //   const newStateAddList = state.all
    //   newStateAddList.map(project =>
    //     project.id === action.project.id
    //       ? (action.project.lists = [...project.lists, newList])
    //       : project
    //   )
    //   return {
    //     ...state,
    //     all: newStateAddList
    //   }

    // case CONSTANTS.ADD_CARD:
    //   const newCard = {
    //     title: action.payload.text,
    //     id: `todo_${uuid()}`,
    //     tags: [],
    //     isComplete: false
    //   }
    //   const newStateAddCard = state.all
    //   newStateAddCard.map(
    //     project =>
    //       (project =
    //         project.id === action.project.id
    //           ? (project.lists = project.lists.map(
    //               list =>
    //                 (list =
    //                   list.id === action.payload.listID
    //                     ? { ...list, cards: [...list.cards, newCard] }
    //                     : list)
    //             ))
    //           : project)
    //   )
    //   return {
    //     ...state,
    //     all: newStateAddCard
    //   }

    case CONSTANTS.DRAG_HAPPENED:
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexEnd,
        droppableIndexStart,
        type,
        project
      } = action.payload
      // const newStateDrag = state.all
      const newState = [...project.lists]

      if (type === 'list') {
        const list = newState.splice(droppableIndexStart, 1)
        newState.splice(droppableIndexEnd, 0, ...list)
        // newStateDrag.map(project =>
        //   project.id === action.project.id
        //     ? (action.project.lists = newState)
        //     : project
        // )
        return {
          ...state,
          lists: newState
        }
      }

      if (droppableIdStart === droppableIdEnd) {
        const list = project.lists.find(list => droppableIdStart === list.id)
        const card = list.cards.splice(droppableIndexStart, 1)
        list.cards.splice(droppableIndexEnd, 0, ...card)
      }

      if (droppableIdStart !== droppableIdEnd) {
        const listStart = project.lists.find(
          list => droppableIdStart === list.id
        )
        const card = listStart.cards.splice(droppableIndexStart, 1)
        const listEnd = project.lists.find(list => droppableIdEnd === list.id)

        listEnd.cards.splice(droppableIndexEnd, 0, ...card)
      }

      return {
        ...state,
        lists: newState
      }
    // case CONSTANTS.EDIT_CARD:
    //   const newStateEditCard = state.all
    //   newStateEditCard
    //     .find(project => project.id === action.project.id)
    //     .lists.map(list => {
    //       if (list.id === action.payload.listID) {
    //         list.cards.map(card => {
    //           if (card.id === action.payload.id) {
    //             card.title = action.payload.newText
    //           }
    //         })
    //       }
    //     })
    //   return {
    //     ...state,
    //     all: newStateEditCard
    //   }

    // case CONSTANTS.DELETE_CARD:
    //   const newStateDeleteCard = state.all
    //   newStateDeleteCard
    //     .find(project => project.id === action.project.id)
    //     .lists.map(list => {
    //       if (list.id === action.payload.listID) {
    //         const newCards = list.cards.filter(
    //           card => card.id !== action.payload.id
    //         )
    //         list.cards = newCards
    //       }
    //     })
    //   return {
    //     ...state,
    //     all: newStateDeleteCard
    //   }

    // case CONSTANTS.EDIT_LIST_TITLE:
    //   const newStateEditTitleList = state.all
    //   newStateEditTitleList
    //     .find(project => project.id === action.project.id)
    //     .lists.map(list => {
    //       if (list.id === action.payload.listID) {
    //         list.title = action.payload.newTitle
    //       }
    //     })
    //   return {
    //     ...state,
    //     all: newStateEditTitleList
    //   }

    // case CONSTANTS.DELETE_LIST:
    //   const newStateDeleteList = state.all
    //   newStateDeleteList.find(project => {
    //     if (project.id === action.project.id) {
    //       project.lists = project.lists.filter(
    //         list => list.id !== action.payload.listID
    //       )
    //     }
    //   })

    // case CONSTANTS.UPDATE_TODO:
    //   const newStateUpdateTodo = state.all
    //   newStateUpdateTodo
    //     .find(project => project.id === action.project.id)
    //     .lists.map(list => {
    //       if (list.id === action.list) {
    //         list.cards.map(card => {
    //           if (card.id === action.todo.id) {
    //             card[`${action.typeValue}`] = action.value
    //           }
    //         })
    //       }
    //     })
    //   return {
    //     ...state,
    //     all: newStateUpdateTodo
    //   }

    case CONSTANTS.CLEAN_LISTS:
      return initialState
    case CONSTANTS.INIT_LISTS:
      return {
        ...state,
        lists: [...action.project.lists]
      }

    default:
      return state
  }
}

export default reducer
