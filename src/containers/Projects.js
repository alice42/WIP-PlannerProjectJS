import * as React from 'react'
import ProjectContent from '../components/Project/ProjectContent'
import { useFirestoreConnect } from 'react-redux-firebase'
import { useSelector } from 'react-redux'
import { isLoaded, isEmpty } from 'react-redux-firebase'
import { useFirestore } from 'react-redux-firebase'

const Projects = props => {
  const [project, setProject] = React.useState()

  React.useEffect(() => {
    const existingProject =
      props.firestore.data.projects &&
      Object.values(props.firestore.data.projects).find(
        project => project && project.id === props.match.params.id
      )
    // props.projectsActions.cleanLists()
    setProject(existingProject)
  })

  return (
    (project && (
      <ProjectContent {...props} projectID={project.projectID} />
    )) || <div>NO PROJECT SELECTED</div>
  )
}

export default Projects
