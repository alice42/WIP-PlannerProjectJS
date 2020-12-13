import * as React from 'react'
import Title from './ProjectTitle'
import ProjectOptions from '../Options/ProjectOptions'
import ProjectSettingsList from './ProjectSettingsList'
import ProjectNotes from './ProjectNotes'
import DragDropContext from '../DragNDrop/DragDropContext'
import {
  StyledTitleContainer,
  StyledTitleCheckbox
} from './styles/projectStyles'
import { isLoaded, useFirestoreConnect } from 'react-redux-firebase'
import { useSelector } from 'react-redux'
import { useFirestore } from 'react-redux-firebase'
import { useHistory } from 'react-router-dom'

const ProjectContent = ({ inputRefNotes, projectID, ...restProps }) => {
  const firestore = useFirestore()
  const history = useHistory()

  const { uid } = useSelector(state => state.firebase.auth)
  const project = useSelector(
    ({ firestore: { data } }) => data.projects && data.projects[projectID]
  )

  const [tagsOpen, setTagsOpen] = React.useState()

  React.useEffect(() => {
    setTagsOpen(
      project && project.tags && project.tags.length !== 0 ? true : false
    )
  }, [project])

  const handleOpenTags = () => {
    setTagsOpen(true)
  }
  const handleCloseTags = () => {
    setTagsOpen(false)
  }

  const handleCompleteProject = () => {
    return firestore
      .collection('users')
      .doc(uid)
      .collection('projects')
      .doc(projectID)
      .update({
        isCompleted: !project.isCompleted
      })
  }

  const handleRemoveProject = () =>
    firestore
      .collection('users')
      .doc(uid)
      .collection('projects')
      .doc(projectID)
      .delete()
      .then(function() {
        console.log('Document successfully deleted!')
        history.push('/projects')
      })
      .catch(function(error) {
        console.error('Error removing document: ', error)
      })

  const handleUpdateProject = (_project, newValue, valueType) => {
    return firestore
      .collection('users')
      .doc(uid)
      .collection('projects')
      .doc(projectID)
      .update({
        [`${valueType}`]: newValue
      })
  }

  if (!isLoaded(project)) {
    return 'Loading...'
  }
  return (
    project && (
      <>
        <StyledTitleContainer>
          <StyledTitleCheckbox
            checked={project.isCompleted}
            onChange={handleCompleteProject}
          />
          <Title project={project} handleUpdateProject={handleUpdateProject} />
          <ProjectOptions
            project={project}
            handleCompleteProject={handleCompleteProject}
            handleRemoveProject={handleRemoveProject}
            handleOpenTags={handleOpenTags}
            updateProject={handleUpdateProject}
          />
        </StyledTitleContainer>
        <ProjectSettingsList
          project={project}
          openProjectTags={tagsOpen}
          handleUpdateProject={handleUpdateProject}
          handleCloseTags={handleCloseTags}
        />
        <ProjectNotes
          project={project}
          handleUpdateProject={handleUpdateProject}
        />
        <DragDropContext
          {...restProps}
          project={project}
          handleUpdateProject={handleUpdateProject}
        />
      </>
    )
  )
}

export default ProjectContent
