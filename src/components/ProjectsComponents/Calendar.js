// import React from 'react'
// import FullCalendar from '@fullcalendar/react'
// import dayGridPlugin from '@fullcalendar/daygrid'
// import timeGridPlugin from '@fullcalendar/timegrid'
// import interactionPlugin from '@fullcalendar/interaction'
// import { Icon } from '@material-ui/core'
// import { StyleWrapper, StyledButtonToday } from './styles/ProjectStyles'
// import {
//   todayStr,
//   customViewPlugin,
//   renderEventContent,
//   handleDayCellClassNames,
//   handleDayHeaderClassNames,
//   handleDayCellDidMount
// } from '../utils'

// export default function Calendar(props) {
//   const calendarRef = React.createRef()
//   const INITIAL_EVENTS = [
//     {
//       id: props.currentProject.id,
//       title: props.currentProject.title,
//       start: props.currentProject[props.calendarType],
//       editable: false,
//       display: 'background'
//     }
//   ]

//   const handleDateSelect = (startStr, calendarApi) => {
//     if (props.calendarType === 'startDate' && startStr < todayStr) return
//     calendarApi.unselect()
//     if (
//       props.currentProject.title &&
//       !props.currentProject[props.calendarType]
//     ) {
//       calendarApi.addEvent({
//         id: props.currentProject.id,
//         title: props.currentProject.title,
//         start: startStr,
//         allDay: true,
//         display: 'background'
//       })
//       props.projectsActions.updateProject(
//         props.currentProject,
//         startStr,
//         props.calendarType
//       )
//     } else if (
//       props.currentProject.title &&
//       props.currentProject[props.calendarType]
//     ) {
//       const event = calendarApi.getEventById(props.currentProject.id)
//       event.setStart(startStr, { maintainDuration: true })
//       props.projectsActions.updateProject(
//         props.currentProject,
//         startStr,
//         props.calendarType
//       )
//     }
//     props.handleClose()
//   }

//   // const handleDrop = info => {
//   //   let calendarApi = info.view.calendar
//   //   calendarApi.unselect()
//   //   if (props.currentProject.title && props.currentProject[props.calendarType]) {
//   //     const event = calendarApi.getEventById(props.currentProject.id)
//   //     event.setStart(info.event.startStr, { maintainDuration: true })
//   //     props.projectsActions.updateProject(
//   //       props.currentProject,
//   //       info.event.startStr,
//   //       props.calendarType
//   //     )
//   //   }
//   // }

//   const handleEventClick = clickInfo => {
//     if (
//       clickInfo.event.id === props.currentProject.id &&
//       confirm(
//         `Are you sure you want to delete the event '${clickInfo.event.title}'`
//       )
//     ) {
//       clickInfo.event.remove()
//       props.projectsActions.updateProject(props.currentProject, null, [
//         props.calendarType
//       ])
//     }
//   }

//   return (
//     <StyleWrapper>
//       {props.calendarType === 'startDate' && (
//         <StyledButtonToday
//           onClick={() => {
//             handleDateSelect(todayStr, calendarRef.current.getApi())
//           }}
//         >
//           <Icon style={{ fontSize: '20px' }}>star</Icon>Today
//         </StyledButtonToday>
//       )}
//       <FullCalendar
//         ref={calendarRef}
//         plugins={[
//           dayGridPlugin,
//           timeGridPlugin,
//           interactionPlugin,
//           customViewPlugin
//         ]}
//         initialView={props.calendarType}
//         locale={'en'}
//         weekNumberCalculation={'ISO'}
//         headerToolbar={{
//           left: '',
//           center: '',
//           right: ''
//         }}
//         footerToolbar={{ left: 'prev', center: 'title, today', right: 'next' }}
//         buttonText={{
//           today: 'Back to Today'
//         }}
//         aspectRatio={props.calendarType === 'startDate' ? 1.75 : 1.25}
//         selectable={true}
//         selectMirror={true}
//         dayMaxEvents={true}
//         initialEvents={INITIAL_EVENTS}
//         select={selectInfo =>
//           handleDateSelect(selectInfo.startStr, selectInfo.view.calendar)
//         }
//         eventClick={handleEventClick}
//         // eventDrop={handleDrop}
//         eventContent={e => renderEventContent(e, props.calendarType)}
//         dayCellDidMount={e => handleDayCellDidMount(e, props.calendarType)}
//         dayCellClassNames={e => handleDayCellClassNames(e, props.calendarType)}
//         dayHeaderClassNames={e =>
//           handleDayHeaderClassNames(e, props.calendarType)
//         }
//       />
//     </StyleWrapper>
//   )
// }
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
  renderEventContent,
  handleDayCellClassNames,
  handleDayHeaderClassNames,
  handleDayCellDidMount
} from '../utils'

export default function Calendar(props) {
  const calendarRef = React.createRef()
  const INITIAL_EVENTS = [
    {
      id: props.toUpdate.id,
      title: props.toUpdate.title,
      start: props.toUpdate[props.dateType],
      editable: false,
      display: 'background'
    }
  ]

  const handleDateSelect = (startStr, calendarApi) => {
    console.log('A')
    if (props.dateType === 'startDate' && startStr < todayStr) return
    calendarApi.unselect()
    if (props.toUpdate.title && !props.toUpdate[props.dateType]) {
      console.log('B')
      calendarApi.addEvent({
        id: props.toUpdate.id,
        title: props.toUpdate.title,
        start: startStr,
        allDay: true,
        display: 'background'
      })
      props.handleUpdate(props.toUpdate, startStr, props.dateType)
    } else if (props.toUpdate.title && props.toUpdate[props.dateType]) {
      console.log('C')
      const event = calendarApi.getEventById(props.toUpdate.id)
      event.setStart(startStr, { maintainDuration: true })
      props.handleUpdate(props.toUpdate, startStr, props.dateType)
    }
    props.handleClose()
  }

  // const handleDrop = info => {
  //   let calendarApi = info.view.calendar
  //   calendarApi.unselect()
  //   if (props.toUpdate.title && props.toUpdate[props.dateType]) {
  //     const event = calendarApi.getEventById(props.toUpdate.id)
  //     event.setStart(info.event.startStr, { maintainDuration: true })
  //     props.handleUpdate(
  //       props.toUpdate,
  //       info.event.startStr,
  //       props.dateType
  //     )
  //   }
  // }

  const handleEventClick = clickInfo => {
    if (
      clickInfo.event.id === props.toUpdate.id &&
      confirm(
        `Are you sure you want to delete the event '${clickInfo.event.title}'`
      )
    ) {
      clickInfo.event.remove()
      props.handleUpdate(props.toUpdate, null, [props.dateType])
    }
  }

  return (
    <StyleWrapper>
      {props.dateType === 'startDate' && (
        <StyledButtonToday
          onClick={() => {
            handleDateSelect(todayStr, calendarRef.current.getApi())
          }}
        >
          <Icon style={{ fontSize: '20px' }}>star</Icon>Today
        </StyledButtonToday>
      )}
      <FullCalendar
        ref={calendarRef}
        plugins={[
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin,
          customViewPlugin
        ]}
        initialView={props.dateType}
        locale={'en'}
        weekNumberCalculation={'ISO'}
        headerToolbar={{
          left: '',
          center: '',
          right: ''
        }}
        footerToolbar={{ left: 'prev', center: 'title, today', right: 'next' }}
        buttonText={{
          today: 'Back to Today'
        }}
        aspectRatio={props.dateType === 'startDate' ? 1.75 : 1.25}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        initialEvents={INITIAL_EVENTS}
        select={selectInfo =>
          handleDateSelect(selectInfo.startStr, selectInfo.view.calendar)
        }
        eventClick={handleEventClick}
        // eventDrop={handleDrop}
        eventContent={e => renderEventContent(e, props.dateType)}
        dayCellDidMount={e => handleDayCellDidMount(e, props.dateType)}
        dayCellClassNames={e => handleDayCellClassNames(e, props.dateType)}
        dayHeaderClassNames={e => handleDayHeaderClassNames(e, props.dateType)}
      />
    </StyleWrapper>
  )
}
