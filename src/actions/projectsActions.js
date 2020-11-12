//PROJECTS
export const CONSTANTS = {
  ADD_PROJECT: 'ADD_PROJECT',
  UPDATE_PROJECT: 'UPDATE_PROJECT',
  REMOVE_PROJECT: 'REMOVE_PROJECT',
  ADD_CARD: 'ADD_CARD',
  ADD_LIST: 'ADD_LIST',
  DRAG_HAPPENED: 'DRAG_HAPPENED',
  EDIT_CARD: 'EDIT_CARD',
  DELETE_CARD: 'DELETE_CARD',
  EDIT_LIST_TITLE: 'EDIT_LIST_TITLE'
}

export const addProject = newProject => {
  return {
    type: CONSTANTS.ADD_PROJECT,
    newProject
  }
}

export const removeProject = projectToRemove => ({
  type: CONSTANTS.REMOVE_PROJECT,
  projectToRemove
})

export const updateProject = (projectToUpdate, newValue, keyToUpdate) => ({
  type: CONSTANTS.UPDATE_PROJECT,
  updatedProject: { ...projectToUpdate, [`${keyToUpdate}`]: newValue }
})

export const addCard = (listID, text, project) => ({
  type: CONSTANTS.ADD_CARD,
  project,
  payload: { text, listID }
})

export const addList = (title, project) => {
  return {
    type: CONSTANTS.ADD_LIST,
    project,
    payload: title
  }
}
//
export const editCard = (id, listID, newText) => {
  return {
    type: CONSTANTS.EDIT_CARD,
    payload: { id, listID, newText }
  }
}

export const deleteCard = (id, listID) => {
  return {
    type: CONSTANTS.DELETE_CARD,
    payload: { id, listID }
  }
}

export const sort = (
  droppableIdStart,
  droppableIdEnd,
  droppableIndexStart,
  droppableIndexEnd,
  draggableId,
  type,
  project
) => {
  return {
    type: CONSTANTS.DRAG_HAPPENED,
    payload: {
      droppableIdStart,
      droppableIdEnd,
      droppableIndexEnd,
      droppableIndexStart,
      draggableId,
      type,
      project
    }
  }
}

export const editTitle = (listID, newTitle) => {
  return {
    type: CONSTANTS.EDIT_LIST_TITLE,
    payload: {
      listID,
      newTitle
    }
  }
}
