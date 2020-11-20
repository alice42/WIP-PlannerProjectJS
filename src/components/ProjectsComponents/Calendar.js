import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { Icon } from '@material-ui/core'
import { StyleWrapper, StyledButtonToday } from './styles/ProjectStyles'
import {
  todayStr,
  customViewPlugin,
  cellContent,
  renderEventContent,
  handleDayCellClassNames,
  handleDayHeaderClassNames,
  handleDayCellDidMount
} from '../utils'

export default function Calendar(props) {
  const calendarRef = React.createRef()
  const INITIAL_EVENTS = [
    {
      id: props.currentProject.id,
      title: props.currentProject.title,
      start: props.currentProject.startDate,
      editable: false,
      display: 'background'
    }
  ]

  const handleDateSelect = (startStr, calendarApi) => {
    if (startStr < todayStr) return
    calendarApi.unselect()
    if (props.currentProject.title && !props.currentProject.startDate) {
      calendarApi.addEvent({
        id: props.currentProject.id,
        title: props.currentProject.title,
        start: startStr,
        allDay: true,
        display: 'background'
      })
      props.projectsActions.updateProject(
        props.currentProject,
        startStr,
        'startDate'
      )
    } else if (props.currentProject.title && props.currentProject.startDate) {
      const event = calendarApi.getEventById(props.currentProject.id)
      event.setStart(startStr, { maintainDuration: true })
      props.projectsActions.updateProject(
        props.currentProject,
        startStr,
        'startDate'
      )
    }
    props.handleClose()
  }

  // const handleDrop = info => {
  //   let calendarApi = info.view.calendar
  //   calendarApi.unselect()
  //   if (props.currentProject.title && props.currentProject.startDate) {
  //     const event = calendarApi.getEventById(props.currentProject.id)
  //     event.setStart(info.event.startStr, { maintainDuration: true })
  //     props.projectsActions.updateProject(
  //       props.currentProject,
  //       info.event.startStr,
  //       'startDate'
  //     )
  //   }
  // }

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

  return (
    <StyleWrapper>
      <StyledButtonToday
        onClick={() => {
          handleDateSelect(todayStr, calendarRef.current.getApi())
        }}
      >
        <Icon style={{ fontSize: '20px' }}>star</Icon>Today
      </StyledButtonToday>
      <FullCalendar
        ref={calendarRef}
        plugins={[
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin,
          customViewPlugin
        ]}
        initialView={'customConfig'}
        locale={'en'}
        weekNumberCalculation={'ISO'}
        headerToolbar={{
          left: '',
          center: '',
          right: ''
        }}
        aspectRatio={1.75}
        // editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        initialEvents={INITIAL_EVENTS}
        select={selectInfo =>
          handleDateSelect(selectInfo.startStr, selectInfo.view.calendar)
        }
        eventClick={handleEventClick}
        // eventDrop={handleDrop}
        dayCellContent={cellContent}
        eventContent={renderEventContent}
        dayCellDidMount={handleDayCellDidMount}
        dayCellClassNames={handleDayCellClassNames}
        dayHeaderClassNames={handleDayHeaderClassNames}
      />
    </StyleWrapper>
  )
}
