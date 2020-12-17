import * as React from 'react'
import styled from 'styled-components'

const StyledInputContext = styled.span`
  .input {
    background: none;
    text-decoration: none;
    border: none;
    outline: none;
    font: inherit;
    text-align: -webkit-auto;
    text-align-last: left;
    line-break: anywhere;
    overflow-wrap: anywhere;
  }
  [contentEditable]:empty:before {
    content: attr(placeholder);
    color: ${props =>
      props.children.props.typevalue === 'heading' ? 'white' : 'gray'};
    background-color: transparent;
    pointer-events: none;
  }
`

const InlineGrownInput = props => {
  const handleInputUpdate = (value, type) => {
    const newValue = value || props.placeholder
    props.project
      ? props.handleUpdateProject(props.project, newValue, type)
      : props.handleUpdateProject(newValue, type)
  }

  const handleSelect = (inputRef, placeholder) => {
    if (inputRef.current.textContent !== placeholder) {
      inputRef.current.selectionStart = inputRef.current.textContent.length
      inputRef.current.selectionEnd = inputRef.current.textContent.length
    } else {
      inputRef.current.textContent = ''
      inputRef.current.selectionStart = 0
      inputRef.current.selectionEnd = 0
    }
  }
  return (
    <StyledInputContext>
      <span
        id={'editable'}
        spellCheck={'false'}
        autoComplete={'off'}
        autoCorrect={'off'}
        autoCapitalize={'off'}
        className={'input'}
        contentEditable={'true'}
        suppressContentEditableWarning={'true'}
        ref={props.inputRef}
        typevalue={props.typeValue}
        onBlur={e => {
          handleInputUpdate(e.currentTarget.textContent, props.typeValue)
        }}
        onKeyPress={e => {
          if (e.key === 'Enter')
            handleInputUpdate(e.currentTarget.textContent, props.typeValue)
        }}
        onSelect={() => {
          handleSelect(props.inputRef, props.placeholder)
        }}
        placeholder={props.placeholder}
      >
        {props.value}
      </span>
    </StyledInputContext>
  )
}

export default InlineGrownInput
