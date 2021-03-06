export const setOptions = (
  project,
  handleCompleteProject,
  handleRemoveProject,
  handleOpenTags,
  handleCalendar,
  handleCalendarDeadline
) => {
  const options = [
    {
      id: 'when',
      title: 'When',
      icon: 'date_range',
      action: handleCalendar
    },
    {
      id: 'tag',
      title: 'Tags',
      icon: 'local_offer',
      action: handleOpenTags
    },
    {
      id: 'deadline',
      title: 'Add Deadline',
      icon: 'schedule',
      action: handleCalendarDeadline
    },
    {
      id: 'delete',
      title: 'Delete Project',
      icon: 'delete',
      action: handleRemoveProject
    },
    {
      id: 'duplicate',
      title: 'Duplicate Project',
      icon: 'file_copy',
      action: () => console.log('DUPLICATE')
    },
    {
      id: 'share',
      title: 'Share',
      icon: 'share',
      action: () => console.log('SHARE')
    }
  ]
  project.isCompleted ||
    options.unshift({
      id: 'complete',
      title: 'Complete Project',
      icon: 'check_circle_outline',
      action: handleCompleteProject
    })
  return options
}

export const optionsTodos = [
  {
    id: 'when',
    title: 'When',
    icon: 'date_range'
  },
  {
    id: 'tag',
    title: 'Tags',
    icon: 'local_offer'
  },
  {
    id: 'checklist',
    title: 'Checklist',
    icon: 'format_list_bulleted'
  },
  {
    id: 'deadline',
    title: 'Deadline',
    icon: 'schedule'
  },
  {
    id: 'delete',
    title: 'Delete',
    icon: 'delete'
  }
]
