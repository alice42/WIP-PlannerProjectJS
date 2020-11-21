import * as React from 'react'
import CustomGrowInput from './CustomGrowInput'
import Title from './Header/Title'
import { HeaderContainer } from './styles/ProjectStyles'
import ListProjectHeader from './ListProjectHeader'

const ProjectHeader = props => {
  const [tags, settags] = React.useState(false)
  const handleNoTags = () => {
    settags(false)
  }
  const handleAddTags = () => {
    settags(true)
  }
  const handleTypeEditing = (value, type) => {
    props.projectsActions.updateProject(props.currentProject, value, type)
  }
  const handleRemoveEvent = () => {
    props.projectsActions.updateProject(props.currentProject, null, 'startDate')
  }
  return (
    <HeaderContainer>
      <Title
        {...props}
        inputRefTitle={props.inputRefTitle}
        currentProject={props.currentProject}
        handleTypeEditing={handleTypeEditing}
        handleAddTags={handleAddTags}
      />
      <ListProjectHeader
        {...props}
        tags={tags}
        handleNoTags={handleNoTags}
        handleRemoveEvent={handleRemoveEvent}
      />
      <div
        style={{
          display: 'block',
          width: '100%',
          textAlign: 'left',
          paddingLeft: '20px'
        }}
      >
        <CustomGrowInput
          {...props}
          inputRef={props.inputRefNotes}
          value={props.currentProject.notes}
          typeValue={'notes'}
          placeholderValue={'Notes'}
          handleTypeEditing={handleTypeEditing}
        />
      </div>
    </HeaderContainer>
  )
}

export default ProjectHeader
