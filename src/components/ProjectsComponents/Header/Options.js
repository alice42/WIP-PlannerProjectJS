import { Icon } from '@material-ui/core'
import * as React from 'react'
import CalendarModal from './CalendarModal'

const Options = props => {
  return (
    <Icon
      onClick={() => {
        console.log('CLICKED OPTIONS')
      }}
      style={{
        padding: '0px 5px 0px 5px',
        verticalAlign: 'text-top',
        cursor: 'pointer'
      }}
    >
      more_horiz
    </Icon>
  )
  // <CalendarModal {...props} />
  // <Icon onClick={props.handleOptions}>more_horiz</Icon>
  //   {props.options && (
  //     <div>
  //       <div onClick={props.handleOpenModal}>add Date</div>
  //       {props.isCompleted || (
  //         <div onClick={props.handleCompleteProject}>Complete</div>
  //       )}
  //       <div onClick={props.handleRemoveProject}>delete</div>
  //     </div>
  //   )}
  // </div>
}

export default Options
