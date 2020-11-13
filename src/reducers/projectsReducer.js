import { CONSTANTS } from '../actions/projectsActions'
let listIDA = 1
let cardID = 0

const initialState = {
  all: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_PROJECT:
      return {
        ...state,
        all: [...state.all, action.newProject]
      }
    case CONSTANTS.REMOVE_PROJECT:
      return {
        ...state,
        all: state.all.filter(
          project => project.id !== action.projectToRemove.id
        )
      }
    case CONSTANTS.UPDATE_PROJECT:
      return {
        ...state,
        all: state.all.map(project =>
          project.id === action.updatedProject.id
            ? action.updatedProject
            : project
        )
      }

    case CONSTANTS.ADD_LIST:
      const newList = {
        title: action.payload,
        cards: [],
        id: `list-${listIDA}`
      }
      listIDA += 1
      const newStateAddList = state.all
      newStateAddList.map(project =>
        project.id === action.project.id
          ? (action.project.lists = [...project.lists, newList])
          : project
      )
      return {
        ...state,
        all: newStateAddList
      }

    case CONSTANTS.ADD_CARD:
      const newCard = {
        text: action.payload.text,
        id: `card-${cardID}`,
        isComplete: false
      }
      cardID += 1
      const newStateAddCard = state.all
      newStateAddCard.map(
        project =>
          (project =
            project.id === action.project.id
              ? (project.lists = project.lists.map(
                  list =>
                    (list =
                      list.id === action.payload.listID
                        ? { ...list, cards: [...list.cards, newCard] }
                        : list)
                ))
              : project)
      )
      return {
        ...state,
        all: newStateAddCard
      }

    case CONSTANTS.DRAG_HAPPENED:
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexEnd,
        droppableIndexStart,
        type
      } = action.payload
      const newStateDrag = state.all
      const newState = [
        ...state.all.find(project => project.id === action.project.id).lists
      ]

      if (type === 'list') {
        const list = newState.splice(droppableIndexStart, 1)
        newState.splice(droppableIndexEnd, 0, ...list)
        newStateDrag.map(project =>
          project.id === action.project.id
            ? (action.project.lists = newState)
            : project
        )
        return {
          ...state,
          all: newStateDrag
        }
      }

      if (droppableIdStart === droppableIdEnd) {
        const list = state.all
          .find(project => project.id === action.project.id)
          .lists.find(list => droppableIdStart === list.id)
        const card = list.cards.splice(droppableIndexStart, 1)
        list.cards.splice(droppableIndexEnd, 0, ...card)
      }

      if (droppableIdStart !== droppableIdEnd) {
        const listStart = state.all
          .find(project => project.id === action.project.id)
          .lists.find(list => droppableIdStart === list.id)
        const card = listStart.cards.splice(droppableIndexStart, 1)
        const listEnd = state.all
          .find(project => project.id === action.project.id)
          .lists.find(list => droppableIdEnd === list.id)

        listEnd.cards.splice(droppableIndexEnd, 0, ...card)
      }

      newStateDrag.map(project =>
        project.id === action.project.id
          ? (action.project.lists = newState)
          : project
      )
      return {
        ...state,
        all: newStateDrag
      }
    case CONSTANTS.EDIT_CARD:
      const newStateEditCard = state.all
      newStateEditCard
        .find(project => project.id === action.project.id)
        .lists.map(list => {
          if (list.id === action.payload.listID) {
            list.cards.map(card => {
              if (card.id === action.payload.id) {
                card.text = action.payload.newText
              }
            })
          }
        })
      return {
        ...state,
        all: newStateEditCard
      }

    // case CONSTANTS.DELETE_CARD: {
    //   const { id, listID } = action.payload
    //   return state.map(list => {
    //     if (list.id === listID) {
    //       const newCards = list.cards.filter(card => card.id !== id)
    //       return { ...list, cards: newCards }
    //     } else {
    //       return list
    //     }
    //   })
    // }

    case CONSTANTS.EDIT_LIST_TITLE:
      const newStateEditTitleList = state.all
      newStateEditTitleList
        .find(project => project.id === action.project.id)
        .lists.map(list => {
          if (list.id === action.payload.listID) {
            list.title = action.payload.newTitle
          }
        })
      return {
        state,
        all: newStateEditTitleList
      }

    default:
      return state
  }
}

export default reducer
