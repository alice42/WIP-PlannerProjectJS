import React from 'react'
import Popper from '@material-ui/core/Popper'
import { PopperBodyList, PopperBodyCalendar } from './styles/componentsStyles'
import Calendar from './Calendar/Calendar'
import TagsList from './Tags/TagsList'
import ProjectOptionsList from './Options/ProjectOptionsList'

export const PopperBody = props => {
  const type =
    props.bodyType === 'when' || props.bodyType === 'deadline'
      ? 'calendar'
      : props.bodyType
  const bodies = {
    options: (
      <PopperBodyList>
        <ProjectOptionsList
          handleClose={props.handleClose}
          options={props.options}
        />
      </PopperBodyList>
    ),
    calendar: (
      <PopperBodyCalendar>
        <Calendar
          {...props}
          dateType={props.bodyType}
          handleUpdate={props.handleUpdate}
          toUpdate={props.toUpdate}
          handleClose={props.handleClose}
        />
      </PopperBodyCalendar>
    ),
    tag: (
      <PopperBodyList>
        <TagsList {...props} />
      </PopperBodyList>
    )
  }
  return bodies[type] || null
}

export const PopperContainer = props => (
  <Popper
    open={props.open}
    anchorEl={props.anchorEl}
    placement={props.placement}
  >
    {props.body}
  </Popper>
)
