import { Checkbox } from '@material-ui/core'
import * as React from 'react'
import Options from '../Options'
import { TitleContainer } from './styles/HeaderStyles'
import CustomGrowInput from '../CustomGrowInput'

const Title = props => {
  const handleRemoveProject = () =>
    props.projectsActions.removeProject(props.currentProject)

  const handleCompleteProject = () => {
    props.projectsActions.updateProject(
      props.currentProject,
      !props.currentProject.isCompleted,
      'isCompleted'
    )
  }

  return (
    <TitleContainer style={{ padding: '10px' }}>
      <div
        style={{
          display: 'flex',
          width: '100%',
          textAlign: 'left'
        }}
      >
        <Checkbox
          style={{ padding: '0px 5px 0px 5px', verticalAlign: 'text-top' }}
          checked={props.currentProject.isCompleted}
          onChange={handleCompleteProject}
        />
        <CustomGrowInput
          {...props}
          value={props.currentProject.title}
          inputRef={props.inputRefTitle}
          typeValue={'title'}
          placeholderValue={'New Project'}
        />
        <Options
          {...props}
          isCompleted={props.currentProject.isCompleted}
          options={props.options}
          handleOptions={props.handleOptions}
          modal={props.modal}
          handleOpenModal={props.handleOpenModal}
          handleCloseModal={props.handleCloseModal}
          handleCompleteProject={handleCompleteProject}
          handleRemoveProject={handleRemoveProject}
        />
      </div>
    </TitleContainer>
  )
}

export default Title
