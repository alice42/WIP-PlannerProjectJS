export const CONSTANTS = {
  ADD_PROJECT: 'ADD_PROJECT',
  UPDATE_PROJECT: 'UPDATE_PROJECT',
  REMOVE_PROJECT: 'REMOVE_PROJECT',
  ADD_CARD: 'ADD_CARD',
  ADD_LIST: 'ADD_LIST',
  DRAG_HAPPENED: 'DRAG_HAPPENED',
  EDIT_CARD: 'EDIT_CARD',
  DELETE_CARD: 'DELETE_CARD',
  EDIT_LIST_TITLE: 'EDIT_LIST_TITLE',
  DELETE_LIST: 'DELETE_LIST',
  UPDATE_TODO: 'UPDATE_TODO',
  CLEAN_LISTS: 'CLEAN_LISTS',
  INIT_LISTS: 'INIT_LISTS'
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

export const editCard = (id, listID, newText, currentProject) => {
  return {
    type: CONSTANTS.EDIT_CARD,
    project: currentProject,
    payload: { id, listID, newText }
  }
}

export const deleteCard = (id, listID, currentProject) => {
  return {
    type: CONSTANTS.DELETE_CARD,
    project: currentProject,
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
      project,
      droppableIdStart,
      droppableIdEnd,
      droppableIndexEnd,
      droppableIndexStart,
      draggableId,
      type
    }
  }
}

export const editTitle = (listID, newTitle, currentProject) => {
  return {
    type: CONSTANTS.EDIT_LIST_TITLE,
    project: currentProject,
    payload: {
      listID,
      newTitle
    }
  }
}

export const deleteList = (listID, currentProject) => {
  return {
    type: CONSTANTS.DELETE_LIST,
    project: currentProject,
    payload: { listID }
  }
}

export const updateTodo = (todo, value, typeValue, project, list) => {
  return {
    type: CONSTANTS.UPDATE_TODO,
    todo,
    value,
    typeValue,
    project,
    list
  }
}

export const cleanLists = () => ({
  type: CONSTANTS.CLEAN_LISTS
})

export const initLists = project => ({
  type: CONSTANTS.INIT_LISTS,
  project
})
