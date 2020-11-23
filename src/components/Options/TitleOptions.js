import React from 'react'
import { Icon, ClickAwayListener } from '@material-ui/core'
import { PopperContainer, PopperBody } from '../Popper'
import { setOptionsTitle } from './utils'

const TitleOptions = props => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [open, setOpen] = React.useState(false)
  const [placement, setPlacement] = React.useState()
  const [bodyType, setBodyType] = React.useState('options')

  React.useEffect(() => {
    setOpen(false)
  }, [props.currentProject])

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
    props.handleOpenTags()
    handleClose()
  }

  const handleUpdateProject = (itemType, newValue, valueType) => {
    props.projectsActions.updateProject(itemType, newValue, valueType)
  }

  const handleClickAway = () => {
    handleClose()
    setBodyType('options')
  }

  const options = setOptionsTitle(
    props.currentProject,
    props.handleCompleteProject,
    props.handleRemoveProject,
    handleTags,
    handleCalendar,
    handleCalendarDeadline
  )

  const body = (
    <PopperBody
      {...props}
      bodyType={bodyType}
      options={options}
      handleUpdate={handleUpdateProject}
      toUpdate={props.currentProject}
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

export default TitleOptions
