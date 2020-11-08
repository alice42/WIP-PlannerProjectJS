//PROJECTS
export const ADD_PROJECT = 'ADD_PROJECT'

export const addProject = newProject => {
  return {
    type: ADD_PROJECT,
    newProject
  }
}

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

//HEADINGS
export const ADD_HEADING = 'ADD_HEADING'

export const addHeading = (currentProject, newHeading) => ({
  type: ADD_HEADING,
  currentProject,
  newHeading
})

export const UPDATE_HEADING = 'UPDATE_HEADING'

export const updateHeading = (projectToUpdate, newValue, keyToUpdate) => {
  const updatedProject = {
    ...projectToUpdate,
    [`${keyToUpdate}`]: projectToUpdate.heading.map(head =>
      head.id === newValue.id ? { ...head, ...newValue } : head
    )
  }
  return {
    type: UPDATE_HEADING,
    updatedProject
  }
}

export const REMOVE_HEADING = 'REMOVE_HEADING'

export const removeHeading = (
  projectToUpdate,
  headingToRemove,
  keyToUpdate
) => {
  const updatedProject = {
    ...projectToUpdate,
    [`${keyToUpdate}`]: projectToUpdate.heading.filter(
      head => head.id !== headingToRemove.id
    )
  }
  return {
    type: REMOVE_HEADING,
    updatedProject
  }
}

//TODOS
export const ADD_TODO = 'ADD_TODO'

export const addTodo = (currentProject, newTodo) => ({
  type: ADD_TODO,
  currentProject,
  newTodo
})

export const UPDATE_TODO = 'UPDATE_TODO'

export const updateTodos = (projectToUpdate, newValue, keyToUpdate) => {
  const updatedProject = { ...projectToUpdate }
  updatedProject.todos[0].subItems = updatedProject.todos[0].subItems.map(
    item => {
      return item.id === newValue.id ? newValue : item
    }
  )
  return {
    type: UPDATE_TODO,
    updatedProject
  }
}
