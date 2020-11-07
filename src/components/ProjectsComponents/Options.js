import * as React from 'react'

const Options = props => {
  return (
    <>
      <div onClick={props.openOptions}>options</div>
      {props.options && (
        <div>
          <div onClick={() => props.handleRemoveProject(props.currentProject)}>
            delete
          </div>
          <div onClick={props.handleOpen}>add Date</div>
          <div onClick={() => props.completeProject(props.currentProject)}>
            Complete
          </div>
        </div>
      )}
    </>
  )
}

export default Options
