import * as React from 'react'
import ProjectContent from '../components/Project/ProjectContent'
import A from '../components/a'

const Projects = props => {
  const [currentProject, setcurrentProject] = React.useState(null)

  React.useEffect(() => {
    const existingProject = props.projects.all.find(
      project => project.id === props.match.params.id
    )
    props.match.params.id && !existingProject
      ? props.history.push('/projects/')
      : setcurrentProject(existingProject)
  })

  const inputRefNotes = React.useRef(null)

  React.useEffect(() => {
    if (inputRefNotes && inputRefNotes.current)
      inputRefNotes.current.textContent = currentProject.notes || ''
  }, [currentProject])

  return (
    (currentProject && (
      <ProjectContent
        {...props}
        inputRefNotes={inputRefNotes}
        all={props.projects.all}
        currentProject={currentProject}
      />
    )) || <div>NO PROJECT SELECTED</div>
  )
}

export default Projects
