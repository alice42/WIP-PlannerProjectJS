import React from 'react'
import { Icon } from '@material-ui/core'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { StyleWrapper, StyledButtonToday } from './styles/CalendarStyles'
import { todayStr } from '../utilsDates'
import {
  customViewPlugin,
  renderEventContent,
  handleDayCellClassNames,
  handleDayHeaderClassNames,
  handleDayCellDidMount
} from './utils'

const Calendar = props => {
  const calendarRef = React.createRef(null)

  React.useEffect(() => {
    calendarRef.current &&
      calendarRef.current._calendarApi.changeView(props.dateType)
  }, [props.dateType])

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
    if (props.dateType === 'when' && startStr < todayStr) return
    calendarApi.unselect()
    if (props.toUpdate.title && !props.toUpdate[props.dateType]) {
      calendarApi.addEvent({
        id: props.toUpdate.id,
        title: props.toUpdate.title,
        start: startStr,
        allDay: true,
        display: 'background'
      })
      props.handleUpdate(startStr, props.dateType)
    } else if (props.toUpdate.title && props.toUpdate[props.dateType]) {
      const event = calendarApi.getEventById(props.toUpdate.id)
      event.setStart(startStr, { maintainDuration: true })
      props.handleUpdate(startStr, props.dateType)
    }
    props.handleClose()
  }

  const handleEventClick = clickInfo => {
    if (
      clickInfo.event.id === props.toUpdate.id &&
      confirm(
        `Are you sure you want to delete the event '${clickInfo.event.title}'`
      )
    ) {
      clickInfo.event.remove()
      props.handleUpdate(null, [props.dateType])
    }
  }

  return (
    <StyleWrapper>
      {props.dateType === 'when' && (
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
        aspectRatio={props.dateType === 'when' ? 1.55 : 1.05}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        initialEvents={INITIAL_EVENTS}
        select={selectInfo =>
          handleDateSelect(selectInfo.startStr, selectInfo.view.calendar)
        }
        eventClick={handleEventClick}
        eventContent={e => renderEventContent(e, props.dateType)}
        dayCellDidMount={e => handleDayCellDidMount(e, props.dateType)}
        dayCellClassNames={e => handleDayCellClassNames(e, props.dateType)}
        dayHeaderClassNames={e => handleDayHeaderClassNames(e, props.dateType)}
      />
    </StyleWrapper>
  )
}

export default Calendar
