import * as React from 'react'
import Input from './Input'
import Options from './Options'
import Modal from './Modal'

const ProjectInfo = props => {
  return (
    <>
      <Input
        typeValue={'title'}
        placeholderValue={'New Project'}
        inputRef={props.inputRefTitle}
        handleInputUpdate={props.handleInputUpdate}
        handleInputEnter={props.handleInputEnter}
      />
      {props.currentProject.isCompleted ? (
        <span className="todo-item-checked">✔</span>
      ) : (
        <span className="todo-item-unchecked" />
      )}
      {props.currentProject.startDate && (
        <span>startDate: {props.currentProject.startDate}</span>
      )}
      <Options
        openOptions={props.openOptions}
        options={props.options}
        currentProject={props.currentProject}
        handleRemoveProject={props.handleRemoveProject}
        handleOpen={props.handleOpen}
        completeProject={props.completeProject}
      />
      <Modal
        all={props.all}
        currentProject={props.currentProject}
        handleDateSelect={props.handleDateSelect}
        handleDrop={props.handleDrop}
        handleEventClick={props.handleEventClick}
        handleOpen={props.handleOpen}
        handleClose={props.handleClose}
        open={props.open}
      />
      <div>
        <Input
          typeValue={'notes'}
          placeholderValue={'Notes'}
          inputRef={props.inputRefNotes}
          handleInputUpdate={props.handleInputUpdate}
          handleInputEnter={props.handleInputEnter}
        />
      </div>
    </>
  )
}

export default ProjectInfo
