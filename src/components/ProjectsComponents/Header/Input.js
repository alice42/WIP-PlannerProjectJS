import * as React from 'react'
import { StyledInput } from './styles/HeaderStyles'

const Input = props => {
  //INPUTS (SAVE ON ENTER & FOCUS LOST)
  const handleInputEnter = (event, type) => {
    if (event.key === 'Enter') {
      handleInputUpdate(event, type)
    }
  }

  const handleInputUpdate = (event, type) => {
    const refs = {
      notes: props.inputRefNotes,
      title: props.inputRefTitle
    }
    const defaultValues = {
      notes: 'Notes',
      title: 'New Project'
    }
    props.projectsActions.updateProject(
      props.currentProject,
      event.target.value || defaultValues[type],
      type
    )

    if (refs[type] && refs[type].current) {
      refs[type].current.value = ''
    }
  }

  const handleSelect = (inputRef, placeholderValue) => {
    if (inputRef.current.value !== placeholderValue) {
      inputRef.current.selectionStart = inputRef.current.value.length
      inputRef.current.selectionEnd = inputRef.current.value.length
    } else {
      inputRef.current.value = ''
      inputRef.current.selectionStart = 0
      inputRef.current.selectionEnd = 0
    }
  }
  return (
    <StyledInput
      ref={props.inputRef}
      onBlur={event => {
        handleInputUpdate(event, props.typeValue)
      }}
      placeholder={props.placeholderValue}
      type="text"
      onKeyPress={event => {
        handleInputEnter(event, props.typeValue)
      }}
      onSelect={() => {
        handleSelect(props.inputRef, props.placeholderValue)
      }}
    />
  )
}

export default Input
