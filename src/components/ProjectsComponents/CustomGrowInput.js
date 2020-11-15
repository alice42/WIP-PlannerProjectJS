import * as React from 'react'
import styled from 'styled-components'

const StyledInputContext = styled.span`
  display: block;
  .input {
    display: block;
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
    display: block;
  }
`

const CustomGrownInput = props => {
  //INPUTS (SAVE ON ENTER & FOCUS LOST)
  // const inputRef = React.useRef(null)

  const handleInputUpdate = (value, type) => {
    // React.useEffect(() => {
    // }, [props.inputRef])

    const defaultValues = {
      notes: 'Notes',
      title: 'New Project',
      heading: 'New Heading',
      todo: 'New To-do'
    }
    const newValue = value || defaultValues[type]
    props.handleTypeEditing(newValue, type)
  }

  const handleSelect = (inputRef, placeholderValue) => {
    if (inputRef.current.textContent !== placeholderValue) {
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
        ref={props.inputRef}
        typevalue={props.typeValue}
        className={'input'}
        contentEditable={'true'}
        suppressContentEditableWarning={'true'}
        placeholder={props.placeholderValue}
        onBlur={e => {
          handleInputUpdate(e.currentTarget.textContent, props.typeValue)
        }}
        onKeyPress={e => {
          if (e.key === 'Enter')
            handleInputUpdate(e.currentTarget.textContent, props.typeValue)
        }}
        onSelect={() => {
          handleSelect(props.inputRef, props.placeholderValue)
        }}
      >
        {props.value}
      </span>
    </StyledInputContext>
  )
}

export default CustomGrownInput
