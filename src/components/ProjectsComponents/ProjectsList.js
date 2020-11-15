import * as React from 'react'
import uuid from 'react-uuid'
import { Link } from 'react-router-dom'
import { Checkbox } from '@material-ui/core'

const ProjectsList = props => {
  const handleCreateNewProject = () => {
    const id = uuid()
    const newProject = {
      id: `project_${id}`,
      isCompleted: false,
      lists: [
        {
          title: '',
          id: `list-${0}`,
          cards: []
        }
      ]
    }
    props.projectsActions.addProject(newProject)
    props.children.props.history.push({
      pathname: `/projects/${newProject.id}`
    })
  }

  const handleLongTitle = text =>
    text && text.length > 11 ? `${text.slice(0, 10)}...` : text

  return (
    <>
      <div>
        <ul style={{ margin: '0', padding: '0' }}>
          {props.projects.all.map(project => (
            <li key={project.id}>
              <Link
                style={{ textDecoration: 'none' }}
                to={`/projects/${project.id}`}
              >
                <Checkbox checked={project.isCompleted} />
                {handleLongTitle(project.title) || 'New Project'}
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
