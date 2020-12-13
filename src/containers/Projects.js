import * as React from 'react'
import ProjectContent from '../components/Project/ProjectContent'
import { useSelector } from 'react-redux'

const Projects = props => {
  const [project, setProject] = React.useState()
  const listsState = useSelector(state => state.projects.lists)

  React.useEffect(() => {
    const existingProject =
      props.firestore.data.projects &&
      Object.values(props.firestore.data.projects).find(
        project => project && project.id === props.match.params.id
      )
    setProject(existingProject)
  })

  React.useEffect(() => {
    listsState && props.projectsActions.cleanLists()
  }, [props.match.params.id])

  return (
    (project && (
      <ProjectContent {...props} projectID={project.projectID} />
    )) || <div>NO PROJECT SELECTED</div>
  )
}

export default Projects
