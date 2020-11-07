import * as React from 'react'
import ProjectHeader from '../components/ProjectsComponents/ProjectHeader'

const Content = props => {
  const inputRefTitle = React.useRef(null)
  const inputRefNotes = React.useRef(null)
  const [options, setOptions] = React.useState(false)
  const [currentProject, setcurrentProject] = React.useState(null)
  const [open, setOpen] = React.useState(false)

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

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const openOptions = () => {
    setOptions(!options)
  }

  const handleRemoveProject = project => {
    props.projectsActions.removeProject(project)
    setOptions(false)
  }

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
      const updatedProject = {
        ...currentProject,
        startDate: selectInfo.startStr
      }
      props.projectsActions.updateProject(updatedProject)
    } else if (currentProject.title && currentProject.startDate) {
      const event = calendarApi.getEventById(currentProject.id)
      event.setStart(selectInfo.startStr, { maintainDuration: true })
      const updatedProject = {
        ...currentProject,
        startDate: selectInfo.startStr
      }
      props.projectsActions.updateProject(updatedProject)
    }
  }

  const handleDrop = info => {
    let calendarApi = info.view.calendar
    calendarApi.unselect()
    console.log('handleDRop', info)
    if (currentProject.title && currentProject.startDate) {
      const event = calendarApi.getEventById(currentProject.id)
      event.setStart(info.event.startStr, { maintainDuration: true })
      const updatedProject = {
        ...currentProject,
        startDate: info.event.startStr
      }
      props.projectsActions.updateProject(updatedProject)
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
      const updatedProject = {
        ...currentProject,
        startDate: null
      }
      props.projectsActions.updateProject(updatedProject)
    }
  }

  //INPUTS (TITLE & NOTES)

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
    props.projectsActions.saveChange(
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
          inputRefNotes={inputRefNotes}
          inputRefTitle={inputRefTitle}
          currentProject={currentProject}
          handleInputUpdate={handleInputUpdate}
          handleInputEnter={handleInputEnter}
          openOptions={openOptions}
          options={options}
          handleRemoveProject={handleRemoveProject}
          authorizeRename={props.projectsActions.authorizeRename}
          handleOpen={handleOpen}
          completeProject={props.projectsActions.completeProject}
          all={props.projects.all}
          handleDateSelect={handleDateSelect}
          handleDrop={handleDrop}
          handleEventClick={handleEventClick}
          handleClose={handleClose}
          open={open}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          Project CONTENT
          <div>add heading</div>
          <div>add todos</div>
        </div>
      </>
    )) || <div>default</div>
  )
}

export default Content
