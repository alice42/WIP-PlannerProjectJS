import * as React from 'react'
import ProjectContent from '../components/Project/ProjectContent'
import { useFirestoreConnect } from 'react-redux-firebase'
import { useSelector } from 'react-redux'
import { isLoaded, isEmpty } from 'react-redux-firebase'
import { useFirestore } from 'react-redux-firebase'

const Projects = props => {
  const [project, setProject] = React.useState()
  const inputRefNotes = React.useRef(null)

  React.useEffect(() => {
    const existingProject =
      props.firestore.data.projects &&
      Object.values(props.firestore.data.projects).find(
        project => project && project.id === props.match.params.id
      )
    setProject(existingProject)
  })

  React.useEffect(() => {
    if (inputRefNotes && inputRefNotes.current)
      inputRefNotes.current.textContent = project.notes || ''
  }, [project])

  return (
    (project && (
      <ProjectContent
        inputRefNotes={inputRefNotes}
        projectID={project.projectID}
      />
    )) || <div>NO PROJECT SELECTED</div>
  )
}

export default Projects
