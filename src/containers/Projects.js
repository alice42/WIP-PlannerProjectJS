import * as React from 'react'
import ProjectHeader from '../components/ProjectsComponents/ProjectHeader'
import ProjectContent from '../components/ProjectsComponents/ProjectContent'

const Content = props => {
  const inputRefTitle = React.useRef(null)
  const inputRefNotes = React.useRef(null)
  const [currentProject, setcurrentProject] = React.useState(null)
  const [options, setOptions] = React.useState(false)
  const [modal, setOpenModal] = React.useState(false)

  React.useEffect(() => {
    const existingProject = props.projects.all.find(
      project => project.id === props.match.params.id
    )
    props.match.params.id && !existingProject
      ? props.history.push('/projects/')
      : setcurrentProject(existingProject)
  })

  React.useEffect(() => {
    setOptions(false)
    if (inputRefNotes && inputRefNotes.current)
      inputRefNotes.current.value = currentProject.notes || ''
    if (inputRefTitle && inputRefTitle.current) {
      inputRefTitle.current.value = currentProject.title || ''
      if (!currentProject.title) inputRefTitle.current.focus()
    }
  }, [currentProject])

  // OPTIONS & MODAL (CALENDAR)
  const handleOpenModal = () => {
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
  }

  const handleOptions = () => {
    setOptions(!options)
  }

  // PROJECT (REMOVE & COMPLETE)
  const handleRemoveProject = () =>
    props.projectsActions.removeProject(currentProject)

  const handleCompleteProject = () =>
    props.projectsActions.updateProject(
      currentProject,
      !currentProject.isCompleted,
      'isCompleted'
    )

  // EVENTS (SELECT A DATE, DROP ON DATE && CLICK EVENT TO REMOVE)

  const handleDateSelect = selectInfo => {
    let calendarApi = selectInfo.view.calendar
    calendarApi.unselect()
    if (currentProject.title && !currentProject.startDate) {
      calendarApi.addEvent({
        id: currentProject.id,
        title: currentProject.title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      })
      props.projectsActions.updateProject(
        currentProject,
        selectInfo.startStr,
        'startDate'
      )
    } else if (currentProject.title && currentProject.startDate) {
      const event = calendarApi.getEventById(currentProject.id)
      event.setStart(selectInfo.startStr, { maintainDuration: true })
      props.projectsActions.updateProject(
        currentProject,
        selectInfo.startStr,
        'startDate'
      )
    }
  }

  const handleDrop = info => {
    let calendarApi = info.view.calendar
    calendarApi.unselect()
    if (currentProject.title && currentProject.startDate) {
      const event = calendarApi.getEventById(currentProject.id)
      event.setStart(info.event.startStr, { maintainDuration: true })
      props.projectsActions.updateProject(
        currentProject,
        info.event.startStr,
        'startDate'
      )
    }
  }

  const handleEventClick = clickInfo => {
    if (
      clickInfo.event.id === currentProject.id &&
      confirm(
        `Are you sure you want to delete the event '${clickInfo.event.title}'`
      )
    ) {
      clickInfo.event.remove()
      props.projectsActions.updateProject(currentProject, null, 'startDate')
    }
  }

  //INPUTS (SAVE ON ENTER & FOCUS LOST)
  const handleInputEnter = (event, type) => {
    if (event.key === 'Enter') {
      handleInputUpdate(event, type)
    }
  }

  const handleInputUpdate = (event, type) => {
    const refs = {
      notes: inputRefNotes,
      title: inputRefTitle
    }
    const defaultValues = {
      notes: 'Notes',
      title: 'New Project'
    }
    props.projectsActions.updateProject(
      currentProject,
      event.target.value || defaultValues[type],
      type
    )

    if (refs[type] && refs[type].current) {
      refs[type].current.value = ''
    }
  }

  return (
    (currentProject && (
      <>
        <ProjectHeader
          // project
          all={props.projects.all}
          currentProject={currentProject}
          handleRemoveProject={handleRemoveProject}
          handleCompleteProject={handleCompleteProject}
          // inputs
          inputRefNotes={inputRefNotes}
          inputRefTitle={inputRefTitle}
          handleInputUpdate={handleInputUpdate}
          handleInputEnter={handleInputEnter}
          // opt&modal
          options={options}
          handleOptions={handleOptions}
          modal={modal}
          handleOpenModal={handleOpenModal}
          handleCloseModal={handleCloseModal}
          // events
          handleDateSelect={handleDateSelect}
          handleDrop={handleDrop}
          handleEventClick={handleEventClick}
        />
        <ProjectContent {...props} currentProject={currentProject} />
      </>
    )) || <div>NO PROJECT SELECTED</div>
  )
}

export default Content
