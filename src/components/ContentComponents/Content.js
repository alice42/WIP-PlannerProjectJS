import * as React from 'react'
import Modal from './Modal'
import Options from './Options'
import ProjectInfo from './ProjectInfo'

const Content = props => {
  const inputRef = React.useRef(null)
  const [options, setOptions] = React.useState(false)
  const [currentProject, setcurrentProject] = React.useState(null)
  const [formState, setFormState] = React.useState('')
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

  const handleInputChange = event => {
    setFormState(event.target.value)
  }

  const handleInputEnter = event => {
    if (event.key === 'Enter') {
      const updatedProject = {
        id: currentProject.id,
        title: formState || currentProject.title,
        isCompleted: false,
        defaultTitle: false
      }
      props.projectsActions.updateProject(updatedProject)
      setFormState('')
      if (inputRef && inputRef.current) {
        inputRef.current.value = ''
      }
    }
  }

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
  return (
    (currentProject && (
      <>
        <Modal
          all={props.projects.all}
          currentProject={currentProject}
          handleDateSelect={handleDateSelect}
          handleDrop={handleDrop}
          handleEventClick={handleEventClick}
          handleOpen={handleOpen}
          handleClose={handleClose}
          open={open}
        />
        <ProjectInfo
          saveChange={props.projectsActions.saveChange}
          inputRef={inputRef}
          currentProject={currentProject}
          handleInputChange={handleInputChange}
          handleInputEnter={handleInputEnter}
        />
        <Options
          openOptions={openOptions}
          options={options}
          currentProject={currentProject}
          handleRemoveProject={handleRemoveProject}
          authorizeRename={props.projectsActions.authorizeRename}
          handleOpen={handleOpen}
          completeProject={props.projectsActions.completeProject}
        />
      </>
    )) || <div>default</div>
  )
}

export default Content
