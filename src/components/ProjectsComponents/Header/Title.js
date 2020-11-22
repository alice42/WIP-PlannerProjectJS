import { Checkbox } from '@material-ui/core'
import * as React from 'react'
import ProjectOptions from '../ProjectOptions'
import { TitleContainer, StyledInputContainer } from './styles/HeaderStyles'
import CustomGrowInput from '../CustomGrowInput'

const Title = props => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [open, setOpen] = React.useState(false)
  const [backToOption, setbackToOption] = React.useState(false)
  const [placement, setPlacement] = React.useState()

  const handleClose = () => {
    setOpen(false)
  }

  const handleBackToOptions = value => {
    setbackToOption(value)
  }
  const handleClick = (newPlacement, bodyType) => event => {
    if (bodyType === 'options') {
      setAnchorEl(event.currentTarget)
      setOpen(prev => placement !== newPlacement || !prev)
      setPlacement(newPlacement)
      handleBackToOptions(false)
    } else {
      handleBackToOptions(true)
    }
  }

  const handleRemoveProject = () => {
    props.projectsActions.removeProject(props.currentProject)
    handleClose()
  }
  const handleCompleteProject = () => {
    props.projectsActions.updateProject(
      props.currentProject,
      !props.currentProject.isCompleted,
      'isCompleted'
    )
    handleClose()
  }

  return (
    <TitleContainer style={{ padding: '10px' }}>
      <StyledInputContainer>
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
        <ProjectOptions
          {...props}
          anchorEl={anchorEl}
          open={open}
          placement={placement}
          backToOption={backToOption}
          handleBackToOptions={handleBackToOptions}
          handleClick={handleClick}
          handleClose={handleClose}
          isCompleted={props.currentProject.isCompleted}
          handleCompleteProject={handleCompleteProject}
          handleRemoveProject={handleRemoveProject}
          handleAddTags={props.handleAddTags}
          handleAddDeadLine={props.handleAddDeadLine}
        />
      </StyledInputContainer>
    </TitleContainer>
  )
}

export default Title
