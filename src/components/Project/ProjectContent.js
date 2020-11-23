import * as React from 'react'
import Title from './ProjectTitle'
import TitleOptions from '../Options/TitleOptions'
import ProjectSettingsList from './ProjectSettingsList'
import ProjectNotes from './ProjectNotes'
import DragDropContext from '../DragNDrop/DragDropContext'
import {
  StyledTitleContainer,
  StyledTitleCheckbox
} from './styles/projectStyles'

const ProjectContent = props => {
  const [tagsOpen, setTagsOpen] = React.useState(false)

  const handleOpenTags = () => {
    setTagsOpen(true)
  }
  const handleCloseTags = () => {
    setTagsOpen(false)
  }

  const handleCompleteProject = () => {
    props.projectsActions.updateProject(
      props.currentProject,
      !props.currentProject.isCompleted,
      'isCompleted'
    )
  }
  const handleRemoveProject = () => {
    props.projectsActions.removeProject(props.currentProject)
  }

  const handleInputEditing = (value, type) => {
    props.projectsActions.updateProject(props.currentProject, value, type)
  }

  const handleRemoveEvent = type => {
    props.projectsActions.updateProject(props.currentProject, null, type)
  }
  return (
    <>
      <StyledTitleContainer>
        <StyledTitleCheckbox
          checked={props.currentProject.isCompleted}
          onChange={handleCompleteProject}
        />
        <Title {...props} handleInputEditing={handleInputEditing} />
        <TitleOptions
          {...props}
          handleCompleteProject={handleCompleteProject}
          handleRemoveProject={handleRemoveProject}
          handleOpenTags={handleOpenTags}
        />
      </StyledTitleContainer>
      <ProjectSettingsList
        {...props}
        tags={tagsOpen}
        handleCloseTags={handleCloseTags}
        handleRemoveEvent={handleRemoveEvent}
      />
      <ProjectNotes {...props} handleInputEditing={handleInputEditing} />
      <DragDropContext {...props} />
    </>
  )
}

export default ProjectContent

//   header
//        title
//            options
//        showListOptions
//   body
//        notes
//        dragNdrop
//            todos
//                notes
//                options
//                showListOptions
//            heading
//                options
//                showListOptions
