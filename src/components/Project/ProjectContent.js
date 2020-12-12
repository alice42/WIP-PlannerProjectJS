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
  const project = useSelector(
    ({ firestore: { data } }) => data.projects && data.projects[projectID]
  )

  const { uid } = useSelector(state => state.firebase.auth)

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

  const handleRemoveProject = event => {
    return firestore
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
  }

  const [tagsOpen, setTagsOpen] = React.useState(
    project && project.tags && project.tags.length !== 0 ? true : false
  )

  const handleOpenTags = () => {
    setTagsOpen(true)
  }
  const handleCloseTags = () => {
    setTagsOpen(false)
  }

  const handleRemoveEvent = type => {
    props.projectsActions.updateProject(props.currentProject, null, type)
  }

  const handleInputEditing = (value, type) => {
    return firestore
      .collection('users')
      .doc(uid)
      .collection('projects')
      .doc(projectID)
      .update({
        [`${type}`]: value
      })
  }

  const handleUpdateProject = (toUpdate, newValue, valueType) => {
    // console.log(toUpdate, newValue, valueType)
    firestore
      .collection('users')
      .doc(uid)
      .collection('projects')
      .doc(toUpdate.projectID)
      .update({
        [`${valueType}`]: newValue
      })
  }

  console.log(project)
  return (
    project && (
      <>
        <StyledTitleContainer>
          <StyledTitleCheckbox
            checked={project.isCompleted}
            onChange={handleCompleteProject}
          />
          <Title project={project} handleInputEditing={handleInputEditing} />
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
          handleRemoveEvent={handleRemoveEvent}
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
