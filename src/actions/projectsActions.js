export const ADD_PROJECT = 'ADD_PROJECT'

export const addProject = data => ({
  type: ADD_PROJECT,
  newProject: data
})

export const UPDATE_PROJECT = 'UPDATE_PROJECT'

export const updateProject = data => {
  return {
    type: UPDATE_PROJECT,
    updatedProject: data
  }
}

export const SAVE_CHANGE = 'SAVE_CHANGE'

export const saveChange = data => {
  console.log('data', data)
  return {
    type: SAVE_CHANGE,
    data: data
  }
}

export const REMOVE_PROJECT = 'REMOVE_PROJECT'

export const removeProject = data => {
  console.log(data)
  return {
    type: REMOVE_PROJECT,
    projectToRemove: data
  }
}
