import * as React from 'react'
import Input from '../Input'
import Options from '../Options'

const ProjectHeader = props => {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Input
          {...props}
          typeValue={'title'}
          placeholderValue={'New Project'}
          inputRef={props.inputRefTitle}
        />
        {props.currentProject.isCompleted && (
          <span className="todo-item-checked">✔</span>
        )}
        {props.currentProject.startDate && (
          <span>startDate: {props.currentProject.startDate}</span>
        )}
        <Options {...props} />
      </div>
      <Input
        {...props}
        typeValue={'notes'}
        placeholderValue={'Notes'}
        inputRef={props.inputRefNotes}
      />
    </>
  )
}

export default ProjectHeader
