import * as React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
  background: grey;
  text-decoration: none;
  border: none;
  outline: none;
  font: inherit;
  border-bottom: 1px solid darkgrey;
  text-decoration: none;
  padding: 15px;
  margin-bottom: 15px;
`

const Input = props => {
  const inputRefHeading = React.useRef(null)
  const inputRefTodos = React.useRef(null)

  React.useEffect(() => {
    if (inputRefHeading && inputRefHeading.current)
      inputRefHeading.current.value = props.heading.title || ''
    if (inputRefTodos && inputRefTodos.current)
      inputRefTodos.current.value = props.subItem.content || ''
  }, [props.heading])

  //INPUTS (SAVE ON ENTER & FOCUS LOST)
  const handleInputEnter = (event, type) => {
    if (event.key === 'Enter') {
      handleInputUpdate(event, type)
    }
  }

  const handleInputUpdate = (event, type) => {
    const refs = {
      heading: inputRefHeading,
      todos: inputRefTodos
    }
    const defaultValues = {
      heading: 'New Heading',
      todos: 'New Todo'
    }

    if (type === 'heading') {
      const updatedHeading = {
        id: props.heading.id,
        title: event.target.value || defaultValues[type]
      }
      props.projectsActions.updateHeading(
        props.currentProject,
        updatedHeading,
        type
      )
    }
    if (type === 'todos') {
      console.log(props)
      const updatedTodos = {
        id: props.subItem.id,
        content: event.target.value || defaultValues[type]
      }
      props.projectsActions.updateTodos(
        props.currentProject,
        updatedTodos,
        type
      )
    }
    if (refs[type] && refs[type].current) {
      refs[type].current.value = ''
    }
  }
  return (
    <div
      style={{
        display: 'flex',
        background: 'grey',
        justifyContent: 'space-between',
        marginBottom: '5px'
      }}
    >
      <StyledInput
        ref={props.typeValue === 'heading' ? inputRefHeading : inputRefTodos}
        autoFocus
        onBlur={event => {
          handleInputUpdate(event, props.typeValue)
        }}
        placeholder={props.placeholderValue}
        type="text"
        onKeyPress={event => {
          handleInputEnter(event, props.typeValue)
        }}
        onSelect={() => {
          if (props.typeValue === 'heading') {
            if (inputRefHeading.current.value !== props.placeholderValue) {
              inputRefHeading.current.selectionStart =
                inputRefHeading.current.value.length
              inputRefHeading.current.selectionEnd =
                inputRefHeading.current.value.length
            } else {
              inputRefHeading.current.value = ''
              inputRefHeading.current.selectionStart = 0
              inputRefHeading.current.selectionEnd = 0
            }
          }
          if (props.typeValue === 'todos') {
            if (inputRefTodos.current.value !== props.placeholderValue) {
              inputRefTodos.current.selectionStart =
                inputRefTodos.current.value.length
              inputRefTodos.current.selectionEnd =
                inputRefTodos.current.value.length
            } else {
              inputRefTodos.current.value = ''
              inputRefTodos.current.selectionStart = 0
              inputRefTodos.current.selectionEnd = 0
            }
          }
        }}
      />
      <div
        onClick={() => {
          props.projectsActions.removeHeading(
            props.currentProject,
            props.heading,
            'heading'
          )
        }}
      >
        options
      </div>
    </div>
  )
}

export default Input
