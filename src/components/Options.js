import * as React from 'react'
import CalendarModal from './CalendarModal'

const Options = props => {
  return (
    <>
      <CalendarModal {...props} />
      <div onClick={props.handleOptions}>options</div>
      {props.options && (
        <div>
          <div onClick={props.handleRemoveProject}>delete</div>
          <div onClick={props.handleOpenModal}>add Date</div>
          <div onClick={props.handleCompleteProject}>Complete</div>
        </div>
      )}
    </>
  )
}

export default Options
