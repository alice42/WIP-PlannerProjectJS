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
    // padding: ${props => (props.typeValue === 'notes' ? '0 0 0 50px' : '0')};
    // font-size: ${props => (props.typeValue === 'notes' ? '16px' : '23px')};
    // ${props => console.log('PROPS')}
  }
  [contentEditable][placeholder]:empty:before {
    content: attr(placeholder);
    color: gray;
    background-color: transparent;
  }
`

const CustomGrownInput = props => {
  //INPUTS (SAVE ON ENTER & FOCUS LOST)

  const handleInputUpdate = (value, type) => {
    const defaultValues = {
      notes: 'Notes',
      title: 'New Project',
      heading: 'New Heading',
      todo: 'New To-do'
    }
    props.handleTypeEditing(value || defaultValues[type], type)
    // if (type === '' || type === '')
    // props.projectsActions.updateProject(
    //   props.currentProject,
    //   value || defaultValues[type],
    //   type
    // )
    // else if (type === '' || type === '')
  }

  return (
    <StyledInputContext>
      <span
        autoFocus
        className={'input'}
        contentEditable="true"
        suppressContentEditableWarning="true"
        placeholder={props.placeholderValue}
        onBlur={e => {
          handleInputUpdate(e.currentTarget.textContent, props.typeValue)
        }}
        onKeyPress={e => {
          if (e.key === 'Enter')
            handleInputUpdate(e.currentTarget.textContent, props.typeValue)
        }}
      >
        {props.value}
      </span>
    </StyledInputContext>
  )
}

export default CustomGrownInput
