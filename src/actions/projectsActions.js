export const ADD_PROJECT = 'ADD_PROJECT'

export const addProject = newProject => ({
  type: ADD_PROJECT,
  newProject
})

export const REMOVE_PROJECT = 'REMOVE_PROJECT'

export const removeProject = projectToRemove => ({
  type: REMOVE_PROJECT,
  projectToRemove
})

export const UPDATE_PROJECT = 'UPDATE_PROJECT'

export const updateProject = (projectToUpdate, newValue, keyToUpdate) => ({
  type: UPDATE_PROJECT,
  updatedProject: { ...projectToUpdate, [`${keyToUpdate}`]: newValue }
})
