import * as React from 'react'
import Input from './Header/Input'
import Options from './Header/Options'

const ProjectHeader = props => {
  const [options, setOptions] = React.useState(false)
  const [modal, setOpenModal] = React.useState(false)

  React.useEffect(() => {
    setOptions(false)
  }, [props.currentProject])

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
    props.projectsActions.removeProject(props.currentProject)

  const handleCompleteProject = () =>
    props.projectsActions.updateProject(
      props.currentProject,
      !props.currentProject.isCompleted,
      'isCompleted'
    )

  // EVENTS (SELECT A DATE, DROP ON DATE && CLICK EVENT TO REMOVE)

  const handleDateSelect = selectInfo => {
    let calendarApi = selectInfo.view.calendar
    calendarApi.unselect()
    if (props.currentProject.title && !props.currentProject.startDate) {
      calendarApi.addEvent({
        id: props.currentProject.id,
        title: props.currentProject.title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      })
      props.projectsActions.updateProject(
        props.currentProject,
        selectInfo.startStr,
        'startDate'
      )
    } else if (props.currentProject.title && props.currentProject.startDate) {
      const event = calendarApi.getEventById(props.currentProject.id)
      event.setStart(selectInfo.startStr, { maintainDuration: true })
      props.projectsActions.updateProject(
        props.currentProject,
        selectInfo.startStr,
        'startDate'
      )
    }
  }

  const handleDrop = info => {
    let calendarApi = info.view.calendar
    calendarApi.unselect()
    if (props.currentProject.title && props.currentProject.startDate) {
      const event = calendarApi.getEventById(props.currentProject.id)
      event.setStart(info.event.startStr, { maintainDuration: true })
      props.projectsActions.updateProject(
        props.currentProject,
        info.event.startStr,
        'startDate'
      )
    }
  }

  const handleEventClick = clickInfo => {
    if (
      clickInfo.event.id === props.currentProject.id &&
      confirm(
        `Are you sure you want to delete the event '${clickInfo.event.title}'`
      )
    ) {
      clickInfo.event.remove()
      props.projectsActions.updateProject(
        props.currentProject,
        null,
        'startDate'
      )
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
      notes: props.inputRefNotes,
      title: props.inputRefTitle
    }
    const defaultValues = {
      notes: 'Notes',
      title: 'New Project'
    }
    props.projectsActions.updateProject(
      props.currentProject,
      event.target.value || defaultValues[type],
      type
    )

    if (refs[type] && refs[type].current) {
      refs[type].current.value = ''
    }
  }
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Input
          {...props}
          typeValue={'title'}
          placeholderValue={'New Project'}
          inputRef={props.inputRefTitle}
          handleInputUpdate={handleInputUpdate}
          handleInputEnter={handleInputEnter}
        />
        {props.currentProject.isCompleted && (
          <span className="todo-item-checked">✔</span>
        )}
        {props.currentProject.startDate && (
          <span>startDate: {props.currentProject.startDate}</span>
        )}
        <Options
          {...props}
          options={options}
          handleOptions={handleOptions}
          modal={modal}
          handleOpenModal={handleOpenModal}
          handleCloseModal={handleCloseModal}
          handleCompleteProject={handleCompleteProject}
          handleRemoveProject={handleRemoveProject}
          handleDateSelect={handleDateSelect}
          handleDrop={handleDrop}
          handleEventClick={handleEventClick}
        />
      </div>
      <Input
        {...props}
        typeValue={'notes'}
        placeholderValue={'Notes'}
        inputRef={props.inputRefNotes}
        handleInputUpdate={handleInputUpdate}
        handleInputEnter={handleInputEnter}
      />
    </>
  )
}

export default ProjectHeader
