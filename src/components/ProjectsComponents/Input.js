import * as React from 'react'

const Input = props => {
  return (
    <input
      ref={props.inputRef}
      onBlur={event => {
        props.handleInputUpdate(event, props.typeValue)
      }}
      placeholder={props.placeholderValue}
      type="text"
      onKeyPress={event => {
        props.handleInputEnter(event, props.typeValue)
      }}
    />
  )
}

export default Input
