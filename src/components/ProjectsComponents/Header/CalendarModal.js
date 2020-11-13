import React from 'react'
import Modal from '@material-ui/core/Modal'
import Calendar from './Calendar'
import { StyledModalBody } from './styles/HeaderStyles'

export default function CalendarModal(props) {
  // EVENTS (SELECT A DATE, DROP ON DATE && CLICK EVENT TO REMOVE)

  const handleDateSelect = selectInfo => {
    let calendarApi = selectInfo.view.calendar
    calendarApi.unselect()
    if (props.currentProject.title && !props.currentProject.startDate) {
      calendarApi.addEvent({
        id: props.currentProject.id,
        title: props.currentProject.title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      })
      props.projectsActions.updateProject(
        props.currentProject,
        selectInfo.startStr,
        'startDate'
      )
    } else if (props.currentProject.title && props.currentProject.startDate) {
      const event = calendarApi.getEventById(props.currentProject.id)
      event.setStart(selectInfo.startStr, { maintainDuration: true })
      props.projectsActions.updateProject(
        props.currentProject,
        selectInfo.startStr,
        'startDate'
      )
    }
  }

  const handleDrop = info => {
    let calendarApi = info.view.calendar
    calendarApi.unselect()
    if (props.currentProject.title && props.currentProject.startDate) {
      const event = calendarApi.getEventById(props.currentProject.id)
      event.setStart(info.event.startStr, { maintainDuration: true })
      props.projectsActions.updateProject(
        props.currentProject,
        info.event.startStr,
        'startDate'
      )
    }
  }

  const handleEventClick = clickInfo => {
    if (
      clickInfo.event.id === props.currentProject.id &&
      confirm(
        `Are you sure you want to delete the event '${clickInfo.event.title}'`
      )
    ) {
      clickInfo.event.remove()
      props.projectsActions.updateProject(
        props.currentProject,
        null,
        'startDate'
      )
    }
  }

  const body = (
    <StyledModalBody>
      <h2>Calendar</h2>
      <Calendar
        all={props.all}
        currentProject={props.currentProject}
        handleDateSelect={handleDateSelect}
        handleDrop={handleDrop}
        handleEventClick={handleEventClick}
      />
    </StyledModalBody>
  )

  return (
    <Modal open={props.modal} onClose={props.handleCloseModal}>
      {body}
    </Modal>
  )
}
