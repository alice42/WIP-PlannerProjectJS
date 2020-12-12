import React from 'react'
import { Icon, ClickAwayListener } from '@material-ui/core'
import { PopperContainer, PopperBody } from '../Popper'
import { setOptionsTitle } from './utils'

const ProjectOptions = ({
  project,
  handleCompleteProject,
  handleRemoveProject,
  handleOpenTags,
  updateProject
}) => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [open, setOpen] = React.useState(false)
  const [placement, setPlacement] = React.useState()
  const [bodyType, setBodyType] = React.useState('options')

  React.useEffect(() => {
    setOpen(false)
  }, [project])

  const handleClose = () => {
    setOpen(false)
  }

  const handleClick = newPlacement => event => {
    if (bodyType === 'options') {
      setAnchorEl(event.currentTarget)
      setOpen(prev => placement !== newPlacement || !prev)
      setPlacement(newPlacement)
    } else {
      setBodyType('options')
    }
  }

  const handleCalendar = () => {
    setBodyType('when')
  }

  const handleCalendarDeadline = () => {
    setBodyType('deadline')
  }

  const handleTags = () => {
    handleOpenTags()
    handleClose()
  }

  const handleUpdateProject = (itemType, newValue, valueType) => {
    updateProject(itemType, newValue, valueType)
  }

  const handleClickAway = () => {
    handleClose()
    setBodyType('options')
  }

  const options = setOptionsTitle(
    project,
    handleCompleteProject,
    handleRemoveProject,
    handleTags,
    handleCalendar,
    handleCalendarDeadline
  )

  const body = (
    <PopperBody
      bodyType={bodyType}
      options={options}
      handleUpdate={handleUpdateProject}
      toUpdate={project}
      handleClose={handleClose}
    />
  )

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <span>
        <Icon onClick={handleClick('top')}>more_horiz</Icon>
        <PopperContainer
          open={open}
          anchorEl={anchorEl}
          placement={placement}
          body={body}
        />
      </span>
    </ClickAwayListener>
  )
}

export default ProjectOptions
