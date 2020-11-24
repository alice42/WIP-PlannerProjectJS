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

export const setCaret = el => {
  let range = document.createRange(),
    sel = window.getSelection(),
    lastKnownIndex = -1
  for (let i = 0; i < el.childNodes.length; i++) {
    if (isTextNodeAndContentNoEmpty(el.childNodes[i])) {
      lastKnownIndex = i
    }
  }
  if (lastKnownIndex === -1) {
    throw new Error('Could not find valid text content')
  }
  let row = el.childNodes[lastKnownIndex],
    col = row.textContent.length
  range.setStart(row, col)
  range.collapse(true)
  sel.removeAllRanges()
  sel.addRange(range)
  el.focus()
}

export const isTextNodeAndContentNoEmpty = node => {
  return node.nodeType == Node.TEXT_NODE && node.textContent.trim().length > 0
}
