import { CONSTANTS } from '../actions/projectsActions'
import uuid from 'react-uuid'

const initialState = {
  projectID: null,
  lists: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_CARD:
      const newCard = {
        title: action.payload.text,
        id: `todo_${uuid()}`,
        tags: [],
        isCompleted: false
      }
      const newStateAddCard = action.project.lists.map(list =>
        list.id === action.payload.listID
          ? { ...list, cards: [...list.cards, newCard] }
          : list
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
      const tmpProjectList = action.project.lists
      const newStateEditCard = tmpProjectList.map(list => {
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

    case CONSTANTS.DELETE_CARD:
      const newStateDeleteCard = action.project.lists.map(list => {
        if (list.id === action.payload.listID) {
          const updatedList = {
            ...list,
            cards: list.cards.filter(card => card.id !== action.payload.id)
          }
          return updatedList
        } else return list
      })

      return {
        ...state,
        lists: newStateDeleteCard
      }

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

    case CONSTANTS.DELETE_LIST:
      const newStateDeleteList = action.project.lists.filter(
        list => list.id !== action.payload.listID
      )
      return {
        ...state,
        lists: newStateDeleteList
      }

    case CONSTANTS.UPDATE_TODO:
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
