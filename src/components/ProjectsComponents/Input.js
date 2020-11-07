import * as React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
  background: none;
  text-decoration: none;
  border: none;
  outline: none;
  font: inherit;
`

const Input = props => {
  return (
    <StyledInput
      ref={props.inputRef}
      onBlur={event => {
        props.handleInputUpdate(event, props.typeValue)
      }}
      placeholder={props.placeholderValue}
      type="text"
      onKeyPress={event => {
        props.handleInputEnter(event, props.typeValue)
      }}
      onSelect={() => {
        if (props.inputRef.current.value !== props.placeholderValue) {
          props.inputRef.current.selectionStart =
            props.inputRef.current.value.length
          props.inputRef.current.selectionEnd =
            props.inputRef.current.value.length
        } else {
          props.inputRef.current.value = ''
          props.inputRef.current.selectionStart = 0
          props.inputRef.current.selectionEnd = 0
        }
      }}
    />
  )
}

export default Input
