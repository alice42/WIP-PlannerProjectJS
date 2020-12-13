import { CONSTANTS } from '../actions/projectsActions'
import uuid from 'react-uuid'

const initialState = {
  projectID: null,
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

    case CONSTANTS.ADD_CARD:
      const newCard = {
        title: action.payload.text,
        id: `todo_${uuid()}`,
        tags: [],
        isComplete: false
      }
      const newStateAddCard = action.project.lists.map(
        list =>
          (list =
            list.id === action.payload.listID
              ? { ...list, cards: [...list.cards, newCard] }
              : list)
      )

      return {
        ...state,
        lists: newStateAddCard
      }

    case CONSTANTS.DRAG_HAPPENED:
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexEnd,
        droppableIndexStart,
        type,
        project
      } = action.payload

      const newState = [...project.lists]

      if (type === 'list') {
        const list = newState.splice(droppableIndexStart, 1)
        newState.splice(droppableIndexEnd, 0, ...list)
        return {
          ...state,
          lists: newState
        }
      }

      if (droppableIdStart === droppableIdEnd) {
        const tmpStateList = [...newState]
        const newStateCards = tmpStateList.map(list => {
          if (droppableIdStart === list.id) {
            const cards = [...list.cards]
            const card = cards.splice(droppableIndexStart, 1)
            cards.splice(droppableIndexEnd, 0, ...card)
            return { ...list, cards: cards }
          }
          return list
        })
        return {
          ...state,
          lists: newStateCards
        }
      }

      if (droppableIdStart !== droppableIdEnd) {
        const tmpStateList = [...newState]
        let card
        const removeCard = tmpStateList.map(list => {
          if (droppableIdStart === list.id) {
            const cardsStart = [...list.cards]
            card = cardsStart.splice(droppableIndexStart, 1)
            return { ...list, cards: cardsStart }
          } else return list
        })

        const newStateCard = removeCard.map(list => {
          if (droppableIdEnd === list.id && card) {
            const cardsEnd = [...list.cards]
            cardsEnd.splice(droppableIndexEnd, 0, ...card)
            return {
              ...list,
              cards: cardsEnd
            }
          } else return list
        })
        return {
          ...state,
          lists: newStateCard
        }
      }

      return {
        ...state,
        lists: newState
      }
    case CONSTANTS.EDIT_CARD:
      const a = action.project.lists
      const newStateEditCard = a.map(list => {
        if (list.id === action.payload.listID) {
          return {
            ...list,
            cards: list.cards.map(card => {
              if (card.id === action.payload.id) {
                return { ...card, title: action.payload.newText }
              } else return card
            })
          }
        } else return list
      })
      return {
        ...state,
        lists: newStateEditCard
      }

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

    case CONSTANTS.UPDATE_TODO:
      console.log(action)
      const newStateUpdateTodo = action.project.lists.map(list => {
        if (list.id === action.list) {
          return {
            ...list,
            cards: list.cards.map(card => {
              if (card.id === action.todo.id) {
                return { ...card, [`${action.typeValue}`]: action.value }
              } else return card
            })
          }
        } else return list
      })

      return {
        ...state,
        lists: newStateUpdateTodo
      }

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
