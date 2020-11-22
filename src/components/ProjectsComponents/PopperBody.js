import React from 'react'
import Popper from '@material-ui/core/Popper'
import Icon from '@material-ui/core/Icon'
import Calendar from './Calendar'
import { ClickAwayListener, Divider } from '@material-ui/core'
import { BodyCalendar, Body } from './styles/ProjectStyles'

export const BodyCalendarB = props => <BodyCalendar></BodyCalendar>

export const BodyCalendarA = props => (
  // item to date
  //   toUpdate={props.currentProject ||
  //   props.currentTodo ||
  //   props.currentHeading}
  // date to set
  //   dateType={startDate || deadline}
  // fonction to update
  //   handleUpdate={props.projectsActions.updateProject ||
  //   props.projectsActions.saveCard ||
  //   props.projectsActions.saveHeading}
  <BodyCalendar>
    <Calendar
      {...props}
      toUpdate={props.toUpdate}
      dateType={props.dateType}
      handleUpdate={props.handleUpdate}
      //
      handleClose={props.handleClose}
    />
  </BodyCalendar>
)

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

export const BodyOptions = props => {
  const optionsProject = () => {
    const options = [
      { title: 'When', icon: 'date_range', action: props.handleModalCalendar },
      { title: 'Tags', icon: 'local_offer', action: props.handleTags },
      {
        title: 'Add Deadline',
        icon: 'schedule',
        action: props.handleModalCalendarDeaLine
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
  return (
    <Body>
      <ul style={{ margin: '5px', listStyle: 'none', padding: 0 }}>
        {optionsProject().map((option, index) => (
          <ListItems key={`option_${index}`} option={option} index={index} />
        ))}
      </ul>
    </Body>
  )
}
