import React from 'react'
import { createPlugin } from '@fullcalendar/react'

export const todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

export const CustomViewConfig = {
  type: 'dayGridMonth',
  duration: { weeks: 4 },
  fixedWeekCount: false,
  validRange: {
    start: todayStr
  },
  titleFormat: { year: 'numeric', month: 'long' }
}

export const CustomViewConfigDeadLine = {
  type: 'dayGridMonth',
  titleFormat: { year: 'numeric', month: 'long' }
}

export const customViewPlugin = createPlugin({
  views: {
    startDate: CustomViewConfig,
    deadLine: CustomViewConfigDeadLine
  }
})

export const renderEventContent = (e, calendarType) =>
  calendarType === 'startDate' && <div />
export const handleDayCellClassNames = (e, calendarType) =>
  ((e.isToday && calendarType === 'startDate') ||
    (e.isPast && calendarType === 'deadLine')) &&
  'fc-day-other'
export const handleDayHeaderClassNames = (e, calendarType) =>
  calendarType === 'startDate' && 'test'
export const handleDayCellDidMount = (e, calendarType) => {
  if (calendarType === 'startDate' && e.isToday)
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

export const dateString = (startDate, type) => {
  if (
    new Date(startDate).getDate() === new Date(todayStr).getDate() + 1 &&
    type !== 'deadLine'
  )
    return 'Tomorrow'
  else if (
    new Date(startDate).getDate() === new Date(todayStr).getDate() &&
    type !== 'deadLine'
  )
    return 'Today'
  else return new Date(startDate).toDateString()
}

export const daysFromToday = endDate => {
  const diffInMs = new Date(endDate) - new Date(todayStr)
  const diffInDays = diffInMs / (1000 * 60 * 60 * 24)
  const pluralDays = Math.abs(diffInDays) > 1 ? 'days' : 'day'
  return Math.sign(diffInDays) < 0
    ? `${Math.abs(diffInDays)} ${pluralDays} ago`
    : Math.abs(diffInDays) === 0
    ? `Today`
    : `${diffInDays} ${pluralDays} left`
}
