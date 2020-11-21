import { Checkbox } from '@material-ui/core'
import * as React from 'react'
import Options from '../Options'
import { TitleContainer, StyledInputContainer } from './styles/HeaderStyles'
import CustomGrowInput from '../CustomGrowInput'

const Title = props => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [open, setOpen] = React.useState(false)
  const [placement, setPlacement] = React.useState()

  const handleClose = () => {
    setOpen(false)
  }
  const handleClick = newPlacement => event => {
    setAnchorEl(event.currentTarget)
    setOpen(prev => placement !== newPlacement || !prev)
    setPlacement(newPlacement)
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
        <Options
          {...props}
          anchorEl={anchorEl}
          open={open}
          placement={placement}
          handleClick={handleClick}
          handleClose={handleClose}
          isCompleted={props.currentProject.isCompleted}
          handleCompleteProject={handleCompleteProject}
          handleRemoveProject={handleRemoveProject}
          handleAddTags={props.handleAddTags}
        />
      </StyledInputContainer>
    </TitleContainer>
  )
}

export default Title
