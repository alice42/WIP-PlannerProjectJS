import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

export default function Calendar(props) {
  const [weekendsVisible, setweekendsVisible] = React.useState()

  const INITIAL_EVENTS = props.all.map(project => {
    return {
      id: project.id,
      title: project.title,
      start: project.startDate,
      editable: props.currentProject.id === project.id ? true : false
    }
  })

  const renderEventContent = eventInfo => {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    )
  }

  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      headerToolbar={{
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      }}
      contentHeight={'auto'}
      initialView="dayGridMonth"
      editable={true}
      selectable={true}
      selectMirror={true}
      dayMaxEvents={true}
      weekends={weekendsVisible}
      initialEvents={INITIAL_EVENTS}
      select={props.handleDateSelect}
      eventContent={renderEventContent}
      eventClick={props.handleEventClick}
      eventDrop={props.handleDrop}
    />
  )
}
