import React from 'react'
import { createPlugin } from '@fullcalendar/react'
import { todayStr } from '../utilsDates'

export const CustomViewConfig = {
  type: 'dayGridMonth',
  duration: { weeks: 4 },
  fixedWeekCount: false,
  validRange: {
    start: todayStr
  },
  titleFormat: { year: 'numeric', month: 'long' },
  buttonText: '4 day'
}

export const CustomViewConfigDeadline = {
  type: 'dayGridMonth',
  titleFormat: { year: 'numeric', month: 'long' }
}

export const CustomViewGlobal = {
  type: 'dayGridMonth',
  titleFormat: { year: 'numeric', month: 'long' }
}

export const customViewPlugin = createPlugin({
  views: {
    when: CustomViewConfig,
    deadline: CustomViewConfigDeadline,
    global: CustomViewGlobal
  }
})

export const renderEventContent = (e, calendarType) =>
  calendarType === 'when' || calendarType === 'deadline' ? (
    <div />
  ) : (
    e.event.title
  )

export const handleDayCellClassNames = (e, calendarType) => {
  if (e.isToday && calendarType === 'when') return 'today-icon'
  else if (e.isPast && calendarType === 'deadline') return 'fc-day-other'
}

export const handleDayHeaderClassNames = (e, calendarType) =>
  calendarType === 'when' && 'test'

export const handleDayCellDidMount = (e, calendarType) => {
  if (calendarType === 'when' && e.isToday)
    e.el.innerHTML = `
      <div style="display: flex; justify-content: center;" class="fc-daygrid-day-top">
        <span style="font-size: 20px;" class="material-icons MuiIcon-root" aria-hidden="true">
          star
        </span>
      </div>`
  if (e.dayNumberText === '1') {
    const className = e.isPast ? 'monthRender past' : 'monthRender'
    e.el.innerHTML = `
      <div class="${className}">
        <div>${e.date.toLocaleString('default', { month: 'short' })}</div>
        <div>${e.dayNumberText}</div>
      </div>`
  }
}
