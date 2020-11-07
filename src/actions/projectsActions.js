export const ADD_PROJECT = 'ADD_PROJECT'

export const addProject = data => ({
  type: ADD_PROJECT,
  newProject: data
})

export const REMOVE_PROJECT = 'REMOVE_PROJECT'

export const removeProject = data => {
  console.log(data)
  return {
    type: REMOVE_PROJECT,
    projectToRemove: data
  }
}

export const COMPLETE_PROJECT = 'COMPLETE_PROJECT'

export const completeProject = data => {
  return {
    type: COMPLETE_PROJECT,
    projectToComplete: data
  }
}

export const UPDATE_PROJECT = 'UPDATE_PROJECT'

export const updateProject = (projectToUpdate, newValue, keyToUpdate) => {
  const updatedProject = { ...projectToUpdate, [`${keyToUpdate}`]: newValue }
  return {
    type: UPDATE_PROJECT,
    updatedProject
  }
}
