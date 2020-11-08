import React from 'react'
import uuid from 'react-uuid'

import ZoneDrop from '../ZoneDrop'

const ProjectContent = props => {
  const handleAddHeading = () => {
    const id = uuid()
    const newHeading = {
      id: `heading_${id}`,
      subItems: []
    }
    props.projectsActions.addHeading(props.currentProject, newHeading)
  }

  const handleAddTodo = () => {
    const id = uuid()
    const newTodo = {
      id: `todos_${props.currentProject.todos[0].id}_${id}`
      // content: 'New Todo'
    }
    props.projectsActions.addTodo(props.currentProject, newTodo)
  }
  return (
    <>
      <ZoneDrop
        {...props}
        handleAddHeading={handleAddHeading}
        handleAddTodo={handleAddTodo}
      />
      {/* <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: '16px'
        }}
      >
        <div>Heading Zone</div>
        {props.currentProject.heading &&
          props.currentProject.heading.map(heading => (
            <div key={heading.id}>
              <InputHeading
                {...props}
                heading={heading}
                typeValue={'heading'}
                placeholderValue={'New Heading'}
              />
            </div>
          ))}
      </div>
      <div onClick={handleAddHeading}>add heading</div> */}
    </>
  )
}

export default ProjectContent
