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
import { useFirestoreConnect } from 'react-redux-firebase'
import { useSelector } from 'react-redux'
import { useFirestore } from 'react-redux-firebase'
import { useHistory } from 'react-router-dom'

const ProjectContent = ({ inputRefNotes, projectID }) => {
  const firestore = useFirestore()
  const history = useHistory()

  const { uid } = useSelector(state => state.firebase.auth)
  const project = useSelector(
    ({ firestore: { data } }) => data.projects && data.projects[projectID]
  )

  const [tagsOpen, setTagsOpen] = React.useState()

  React.useEffect(() => {
    setTagsOpen(project.tags && project.tags.length !== 0 ? true : false)
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

  // const handleRemoveEvent = type => {
  //   props.projectsActions.updateProject(props.currentProject, null, type)
  // }

  const handleInputEditing = (value, type) =>
    firestore
      .collection('users')
      .doc(uid)
      .collection('projects')
      .doc(projectID)
      .update({
        [`${type}`]: value
      })

  const handleUpdateProject = (newValue, valueType) =>
    firestore
      .collection('users')
      .doc(uid)
      .collection('projects')
      .doc(projectID)
      .update({
        [`${valueType}`]: newValue
      })

  console.log(project)
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
          // handleRemoveEvent={handleRemoveEvent}
        />
        {/*    // <ProjectNotes
      //   // {...props}
      //   handleInputEditing={handleInputEditing}
      // />
      // <DragDropContext
      //   //  {...props}
      //   updateProject={handleUpdateProject}
      // /> */}
      </>
    )
  )
}

export default ProjectContent
