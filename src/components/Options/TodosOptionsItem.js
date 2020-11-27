import React from 'react'
import ExpandInput from '../ExpandInput'

export default function TodosOptionsItem(props) {
  const options = props.currentTodo && !props.currentTodo[props.option.id] && (
    <ExpandInput
      {...props}
      todo={props.currentTodo}
      id={props.option.id}
      expanded={props.expanded}
      icon={props.option.icon}
      option={props.option.title}
      handleClose={props.handleClose}
      handleClick={props.handleClick}
      bodyType={props.bodyType}
      handleUpdate={props.handleUpdate}
    />
  )
  return options || null
}
