import React from 'react'
import Popper from '@material-ui/core/Popper'
import { PopperBodyA, BodyCalendar } from './styles/componentsStyles'
import ListItems from './Options/TitleOptionsItem'
import Calendar from './Calendar/Calendar'

export const PopperBody = props => {
  const type =
    props.bodyType === 'when' || props.bodyType === 'deadline'
      ? 'calendar'
      : props.bodyType
  const bodies = {
    options: (
      <PopperBodyA>
        <ul>
          {props.options.map((option, index) => (
            <ListItems
              key={`option_${index}`}
              option={option}
              index={index}
              handleClose={props.handleClose}
            />
          ))}
        </ul>
      </PopperBodyA>
    ),
    calendar: (
      <BodyCalendar>
        <Calendar
          {...props}
          dateType={props.bodyType}
          handleUpdate={props.handleUpdate}
          toUpdate={props.toUpdate}
          handleClose={props.handleClose}
        />
      </BodyCalendar>
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
