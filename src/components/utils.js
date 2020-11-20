import React from 'react'
import { createPlugin } from '@fullcalendar/react'

export const todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

export const CustomViewConfig = {
  type: 'dayGridMonth',
  duration: { weeks: 4 },
  fixedWeekCount: false
}
export const customViewPlugin = createPlugin({
  views: {
    customConfig: CustomViewConfig
  }
})

export const cellContent = renderCellInfo => {
  if (renderCellInfo.isPast) return <></>
}
export const renderEventContent = () => <div />
export const handleDayCellClassNames = e => e.isToday && 'fc-day-other'
export const handleDayHeaderClassNames = () => 'test'
export const handleDayCellDidMount = e => {
  if (e.isToday)
    e.el.innerHTML = `
      <div style="display: flex; justify-content: center;" class="fc-daygrid-day-top">
        <span style="font-size: 20px;" class="material-icons MuiIcon-root" aria-hidden="true">
          star
        </span>
      </div`
}
