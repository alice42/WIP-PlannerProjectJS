import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import styled from 'styled-components'
import { sliceEvents, createPlugin } from '@fullcalendar/react'

class CustomView extends React.Component {
  render() {
    console.log('PROPS', this.props)
    let segs = sliceEvents(this.props, true) // allDay=true

    return (
      <div>
        <div className="view-title">
          {this.props.dateProfile.currentRange.start.toUTCString()}
        </div>
        <div className="view-events">{segs.length} events</div>
      </div>
    )
  }
}
class CustomViewA extends React.Component {
  render() {
    console.log('PROPS', this.props)
    let segs = sliceEvents(this.props, true) // allDay=true

    return (
      <div>
        <div className="view-title">
          {this.props.dateProfile.currentRange.start.toUTCString()}
        </div>
        <div className="view-events">{segs.length} events</div>
      </div>
    )
  }
}

var date = new Date()
var today = new Date(date.getTime() - date.getTimezoneOffset() * 60000)
  .toISOString()
  .split('T')[0]

const current_date = new Date()
const cday = current_date.getDay()
console.log(cday)
const CustomViewConfig = {
  type: 'dayGridMonth',
  duration: { weeks: 2 },
  activeStart: '2020-11-17',
  currentStart: '2020-11-17'
  // buttonText: '4 Weeks'
  // fixedWeekCount: false
  // visibleRange: {
  //   start: today
  // }
}
const customViewPlugin = createPlugin({
  views: {
    custom: CustomView,
    customConfig: CustomViewConfig
  }
})
export const StyleWrapper = styled.div`
  .fc {
    padding: 5px;
    padding-bottom: 45px;
  }

  .fc-theme-standard {
    & td,
    & th {
      border: none;
    }
  }

  .fc-theme-standard {
    & .fc-scrollgrid {
      border: none;
    }
  }

  .fc .fc-daygrid-day.fc-day-today {
    background: blue;
  }
  //   //   .fc-highlight {
  //   //     background: red;
  //   //   }

  //   .fc-daygrid-day-top {
  //     //   position: absolute;
  //     display: flex;
  //     height: 100%;
  //     width: 100%;
  //     justify-content: center;
  //     align-items: center;
  //   }
  //   //   .fc-direction-ltr .fc-daygrid-event.fc-event-end,
  //   //   .fc-direction-rtl .fc-daygrid-event.fc-event-start {
  //   //     height: 100%;
  //   //     width: 100%;
  //   //   }
  //   //   .fc .fc-daygrid-body-balanced .fc-daygrid-day-events {
  //   //     position: absolute;
  //   //     height: 100%;
  //   //     width: 100%;
  //   //   }
  //   //   .fc .fc-daygrid-day-events {
  //   //     margin: 0;
  //   //   }
  //   //   .fc-direction-ltr .fc-daygrid-event .fc-event-end {
  //   //     margin: 0;
  //   //   }
  //   //   .fc .fc-daygrid-event-harness {
  //   //     // position: relative;
  //   //     height: 100%;
  //   //     width: 100%;
  //   //     margin: 0;
  //   //     padding: 0;
  //   //   }
  .fc-bg-event {
    opacity: 1;
    background-color: red;
    outline-style: auto;
    overflow: auto;
  }
`

let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

export function createEventId() {
  return String(eventGuid++)
}

export default function Calendar(props) {
  const [weekendsVisible, setweekendsVisible] = React.useState()

  const [currentEvents, setEvents] = React.useState([])

  const handleDateSelect = selectInfo => {
    let calendarApi = selectInfo.view.calendar
    calendarApi.unselect()
    if (props.currentProject.title && !props.currentProject.startDate) {
      calendarApi.addEvent({
        id: props.currentProject.id,
        title: props.currentProject.title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
        display: 'background',
        backgroundColor: 'red',
        borderColor: 'black'
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

  //   const INITIAL_EVENTS = props.all.map(project => {
  //     return {
  //       id: project.id,
  //       title: project.title,
  //       start: project.startDate,
  //       editable: props.currentProject.id === project.id ? true : false
  //     }
  //   })

  const renderEventContent = eventInfo => {
    // console.log(eventInfo)
    return <div />
  }

  const INITIAL_EVENTS = [
    {
      id: props.currentProject.id,
      title: props.currentProject.title,
      start: props.currentProject.startDate,
      editable: true
    }
  ]
  console.log(props)
  return (
    <StyleWrapper>
      <FullCalendar
        plugins={[
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin,
          customViewPlugin
        ]}
        // views={views}
        initialView={'customConfig'}
        headerToolbar={{
          left: 'today',
          center: '',
          right: ''
        }}
        // dayRender={function(date, cell) {
        //   console.log('djsadjldjasjdlkas')
        //   var today = new Date()
        //   var end = new Date()
        //   end.setDate(today.getDate() + 7)

        //   /*
        //   NOT WORK
        //   if (date.moment() === today.moment()) {
        //     cell.css("background-color", "red");
        //     cell.css("border-width", "20px");
        //   }
        //   */

        //   if (date > today && date <= end) {
        //     cell.css('background-color', 'yellow')
        //   }
        // }}
        // gotoDate={'2020-11-17'}
        // defaultDate={'2020-11-17'}
        // initialDate={'2020-11-17'}
        firstDay={cday}
        locale={'en'}
        weekNumberCalculation={'ISO'}
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        weekends={weekendsVisible}
        initialEvents={INITIAL_EVENTS}
        select={handleDateSelect}
        eventContent={renderEventContent} // custom render function
        eventClick={handleEventClick}
        // eventsSet={handleEvents}
        // select={props.handleDateSelect}
        // eventContent={renderEventContent}
        // eventClick={props.handleEventClick}
        // eventDrop={props.handleDrop}
      />
    </StyleWrapper>
  )
}
