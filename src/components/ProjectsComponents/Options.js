import React from 'react'
import Popper from '@material-ui/core/Popper'
import Icon from '@material-ui/core/Icon'
import Calendar from './Calendar'
import { ClickAwayListener, Divider } from '@material-ui/core'
import { BodyCalendar, Body } from './styles/ProjectStyles'

export default function Options(props) {
  const [bodyType, setBodyType] = React.useState('options')
  // const [options, setOptions] = React.useState()
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

  const optionsProject = () => {
    const options = [
      { title: 'When', icon: 'date_range', action: handleModalCalendar },
      { title: 'Tags', icon: 'local_offer', action: handleTags },
      {
        title: 'Add Deadline',
        icon: 'schedule',
        action: handleModalCalendarDeaLine
      },
      {
        title: 'Delete Project',
        icon: 'delete',
        action: props.handleRemoveProject
      },
      {
        title: 'Duplicate Project',
        icon: 'file_copy',
        action: props.handleCompleteProject
      },
      {
        title: 'Share',
        icon: 'share',
        action: props.handleCompleteProject
      }
    ]
    props.currentProject.isCompleted ||
      options.unshift({
        title: 'Complete Project',
        icon: 'check_circle_outline',
        action: props.handleCompleteProject
      })
    return options
  }

  const ListItems = ({ option, index }) => (
    <>
      <li>
        <Icon className={'icon-list-options'}>{option.icon}</Icon>
        <span className={'label-list-options'} onClick={option.action}>
          {option.title}
        </span>
      </li>
      {index === 3 && <Divider style={{ margin: '3px' }} />}
    </>
  )

  const bodyCalendar = (
    <BodyCalendar>
      <Calendar
        {...props}
        calendarType={calendarType}
        handleClose={props.handleClose}
        all={props.all}
        currentProject={props.currentProject}
      />
    </BodyCalendar>
  )

  const bodyOptions = (
    <Body>
      <ul style={{ margin: '5px', listStyle: 'none', padding: 0 }}>
        {optionsProject().map((option, index) => (
          <ListItems key={`option_${index}`} option={option} index={index} />
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
