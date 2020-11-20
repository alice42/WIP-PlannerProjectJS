import * as React from 'react'
import CustomGrowInput from './CustomGrowInput'
import Title from './Header/Title'
import { HeaderContainer } from './styles/ProjectStyles'

const ProjectHeader = props => {
  const handleTypeEditing = (value, type) => {
    props.projectsActions.updateProject(props.currentProject, value, type)
  }
  return (
    <HeaderContainer>
      <Title
        {...props}
        inputRefTitle={props.inputRefTitle}
        currentProject={props.currentProject}
        handleTypeEditing={handleTypeEditing}
      />
      {props.currentProject.startDate && (
        <div
          style={{
            margin: '10px 20px 10px 20px',
            borderBottom: '1px solid black',
            borderTop: '1px solid black'
          }}
        >
          DATE: {props.currentProject.startDate}
        </div>
      )}
      <div
        style={{
          display: 'block',
          width: '100%',
          textAlign: 'left',
          paddingLeft: '20px'
        }}
      ></div>
      <div
        style={{
          margin: '10px 20px 10px 20px',
          borderBottom: '1px solid black',
          borderTop: '1px solid black'
        }}
      >
        DEAD LINE
      </div>
      <div
        style={{
          display: 'block',
          width: '100%',
          textAlign: 'left',
          paddingLeft: '20px'
        }}
      ></div>
      <div
        style={{
          margin: '10px 20px 10px 20px',
          borderBottom: '1px solid black',
          borderTop: '1px solid black'
        }}
      >
        TAGS
      </div>
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
