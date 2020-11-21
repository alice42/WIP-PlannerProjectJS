import React from 'react'
import Popper from '@material-ui/core/Popper'
import Icon from '@material-ui/core/Icon'
import Calendar from './Calendar'
import { ClickAwayListener } from '@material-ui/core'
import { BodyCalendar, Body } from './styles/ProjectStyles'

export default function Options(props) {
  const [bodyType, setBodyType] = React.useState('options')
  // const [options, setOptions] = React.useState()

  React.useEffect(() => {
    !props.open && setBodyType('options')
  })

  const handleModalCalendar = () => {
    setBodyType('calendar')
  }
  const handleTags = () => {
    props.handleClose()
    props.handleAddTags()
  }
  const optionsProject = [
    {
      title: 'Complete',
      icon: 'checked',
      action: props.handleCompleteProject
    },
    { title: 'When', icon: 'calendar', action: handleModalCalendar },
    { title: 'Tags', icon: 'tags', action: handleTags },
    {
      title: 'Dead Line',
      icon: 'calendar',
      action: props.handleCompleteProject
    },
    {
      title: 'Delete',
      icon: 'close',
      action: props.handleRemoveProject
    },
    {
      title: 'Duplicate',
      icon: 'close',
      action: props.handleCompleteProject
    },
    {
      title: 'Share',
      icon: 'close',
      action: props.handleCompleteProject
    }
  ]
  // const optionsHeading = []

  const bodyCalendar = (
    <BodyCalendar>
      <Calendar
        {...props}
        handleClose={props.handleClose}
        all={props.all}
        currentProject={props.currentProject}
      />
    </BodyCalendar>
  )

  const bodyOptions = (
    <Body>
      <ul style={{ margin: '5px', listStyle: 'none', padding: 0 }}>
        {optionsProject.map((option, index) => (
          <li key={`option_${index}`}>
            <Icon className={'icon-list-options'}>{option.icon}</Icon>
            <span className={'label-list-options'} onClick={option.action}>
              {option.title}
            </span>
          </li>
        ))}
      </ul>
    </Body>
  )

  const body = {
    options: bodyOptions,
    calendar: bodyCalendar
  }
  const handleClickAway = () => {
    props.handleClose()
    setBodyType('options')
  }

  // const option = {
  //   heading: optionsHeading,
  //   project: optionsProject
  // }

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <span>
        <Icon
          onClick={props.handleClick('top')}
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
