export const todayStr = new Date().toISOString().replace(/T.*$/, '')

export const dateString = (when, type) => {
  if (
    new Date(when).getDate() === new Date(todayStr).getDate() + 1 &&
    type !== 'deadline'
  )
    return 'Tomorrow'
  else if (
    new Date(when).getDate() === new Date(todayStr).getDate() &&
    type !== 'deadline'
  )
    return 'Today'
  else return new Date(when).toDateString()
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

export const shortDate = date => {
  const a = new Date(date)
  const newDate = a.toLocaleString('default', {
    day: 'numeric',
    month: 'short'
  })
  return newDate
}

export const dateRange = (startDate, endDate, steps = 1) => {
  const dateArray = []
  let currentDate = new Date(startDate)

  while (currentDate <= new Date(endDate)) {
    dateArray.push({
      option: new Date(currentDate).toDateString(),
      date: new Date(currentDate).toISOString().split('T')[0]
    })
    currentDate.setUTCDate(currentDate.getUTCDate() + steps)
  }

  return dateArray
}
