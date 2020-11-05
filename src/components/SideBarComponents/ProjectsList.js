import * as React from 'react'
import uuid from 'react-uuid'

import { Link } from 'react-router-dom'

const ProjectsList = props => {
  const handleCreateNewProject = () => {
    const id = uuid()
    const newProject = {
      id: `project_${id}`,
      text: 'New Project',
      isCompleted: false,
      defaultText: true
    }
    props.projectsActions.addProject(newProject)
    props.children.props.history.push({
      pathname: `/projects/${newProject.id}`
    })
  }

  return (
    <>
      <div>
        <ul>
          {props.projects.all.map(project => (
            <li key={project.id}>
              <Link to={`/projects/${project.id}`}>
                <div>{project.text}</div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <button onClick={handleCreateNewProject}>Add</button>
    </>
  )
}

export default ProjectsList
