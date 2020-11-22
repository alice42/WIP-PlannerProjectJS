import React from 'react'
import Popper from '@material-ui/core/Popper'
import Icon from '@material-ui/core/Icon'
import { ClickAwayListener } from '@material-ui/core'
import { BodyCalendarA, BodyOptions } from './PopperBody'

export default function Options(props) {
  const [bodyType, setBodyType] = React.useState('options')
  const [calendarType, setCalendarType] = React.useState()

  React.useEffect(() => {
    !props.open && setBodyType('options')
  })
  React.useEffect(() => {
    setBodyType('options')
    props.handleBackToOptions(false)
  }, [props.backToOption])

  const handleModalCalendar = () => {
    setBodyType('calendar')
    setCalendarType('startDate')
  }
  const handleModalCalendarDeaLine = () => {
    setBodyType('calendar')
    setCalendarType('deadLine')
  }
  const handleTags = () => {
    props.handleClose()
    props.handleAddTags()
  }
  const handleUpdateProject = (itemType, newValue, valueType) => {
    props.projectsActions.updateProject(itemType, newValue, valueType)
  }
  const body = {
    options: (
      <BodyOptions
        {...props}
        handleModalCalendar={handleModalCalendar}
        handleTags={handleTags}
        handleModalCalendarDeaLine={handleModalCalendarDeaLine}
      />
    ),
    calendar: (
      <BodyCalendarA
        {...props}
        toUpdate={props.currentProject}
        dateType={calendarType}
        handleUpdate={handleUpdateProject}
      />
    )
  }
  const handleClickAway = () => {
    props.handleClose()
    setBodyType('options')
  }

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <span>
        <Icon
          onClick={props.handleClick('top', bodyType)}
          style={{
            padding: '0px 5px 0px 5px',
            verticalAlign: 'text-top',
            cursor: 'pointer'
          }}
        >
          more_horiz
        </Icon>
        <Popper
          open={props.open}
          anchorEl={props.anchorEl}
          placement={props.placement}
        >
          {body[bodyType]}
        </Popper>
      </span>
    </ClickAwayListener>
  )
}
