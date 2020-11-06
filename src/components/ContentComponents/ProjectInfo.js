import * as React from 'react'

const ProjectInfo = props => {
  return (
    <>
      {(props.currentProject.defaultTitle && (
        <input
          onBlur={() => {
            props.saveChange(props.currentProject)
          }}
          id={props.currentProject.id}
          autoFocus
          ref={props.inputRef}
          type="text"
          placeholder={props.currentProject.title}
          onChange={event => props.handleInputChange(event)}
          onKeyPress={event => props.handleInputEnter(event)}
        />
      )) ||
        props.currentProject.title}
      {props.currentProject.isCompleted ? (
        <span className="todo-item-checked">✔</span>
      ) : (
        <span className="todo-item-unchecked" />
      )}
      {props.currentProject.startDate && (
        <span>startDate: {props.currentProject.startDate}</span>
      )}
      {props.currentProject.notes && <div>A</div>}
    </>
  )
}

export default ProjectInfo
