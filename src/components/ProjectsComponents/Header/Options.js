import * as React from 'react'
import CalendarModal from './CalendarModal'

const Options = props => {
  // PROJECT (REMOVE & COMPLETE)
  const handleRemoveProject = () =>
    props.projectsActions.removeProject(props.currentProject)

  const handleCompleteProject = () =>
    props.projectsActions.updateProject(
      props.currentProject,
      !props.currentProject.isCompleted,
      'isCompleted'
    )
  return (
    <>
      <CalendarModal {...props} />
      <div onClick={props.handleOptions}>options</div>
      {props.options && (
        <div>
          <div onClick={props.handleOpenModal}>add Date</div>
          <div onClick={handleCompleteProject}>Complete</div>
          <div onClick={handleRemoveProject}>delete</div>
        </div>
      )}
    </>
  )
}

export default Options
