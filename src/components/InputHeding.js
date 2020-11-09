import * as React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
  ${props =>
    props.typeValue === 'heading'
      ? `background: grey;
  text-decoration: none;
  border: none;
  outline: none;
  font: inherit;
  border-bottom: 1px solid darkgrey;
  text-decoration: none;
  padding: 15px;
  margin-bottom: 15px;`
      : `
      background: grey;
  text-decoration: none;
  border: none;
  outline: none;
  font: inherit;
  // border-bottom: 1px solid darkgrey;
  text-decoration: none;
  padding: 15px;
  margin-bottom: 15px;`}
`

const Input = props => {
  const inputRefHeading = React.useRef(null)
  const inputRefTodos = React.useRef(null)

  React.useEffect(() => {
    if (inputRefHeading && inputRefHeading.current)
      inputRefHeading.current.value = props.item.title || ''
    if (inputRefTodos && inputRefTodos.current)
      inputRefTodos.current.value = props.item.content || ''
  }, [props.item])

  //INPUTS (SAVE ON ENTER & FOCUS LOST)
  const handleInputEnter = (event, type, ref) => {
    if (event.key === 'Enter') {
      handleInputUpdate(event, type, ref)
    }
  }

  const handleInputUpdate = (event, type, ref) => {
    const defaultValues = {
      heading: 'New Heading',
      todos: 'New Todo'
    }

    if (type === 'heading') {
      const updatedHeading = {
        id: props.item.id,
        title: event.target.value || defaultValues[type]
      }
      props.projectsActions.updateHeading(
        props.currentProject,
        updatedHeading,
        type
      )
    }
    if (type === 'todos') {
      console.log('TODOS', props.projectsActions)
      const updatedTodos = {
        id: props.item.id,
        content: event.target.value || defaultValues[type]
      }
      console.log('A', updatedTodos)
      props.projectsActions.updateTodos(
        props.currentProject,
        updatedTodos,
        type
      )
    }
    if (ref && ref.current) {
      ref.current.value = ''
    }
  }

  const test = event => {
    console.log('EVENT', event, 'PROPS', props)
  }

  const refs = {
    heading: inputRefHeading,
    todos: inputRefTodos
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
        ref={refs[props.typeValue]}
        typeValue={props.typeValue}
        autoFocus
        onBlur={event => {
          handleInputUpdate(event, props.typeValue, refs[props.typeValue])
        }}
        placeholder={props.placeholderValue}
        type="text"
        onKeyPress={event => {
          handleInputEnter(event, props.typeValue, refs[props.typeValue])
        }}
        onSelect={() => {
          if (refs[props.typeValue].current.value !== props.placeholderValue) {
            refs[props.typeValue].current.selectionStart =
              refs[props.typeValue].current.value.length
            refs[props.typeValue].current.selectionEnd =
              refs[props.typeValue].current.value.length
          } else {
            refs[props.typeValue].current.value = ''
            refs[props.typeValue].current.selectionStart = 0
            refs[props.typeValue].current.selectionEnd = 0
          }
        }}
      />
      <div
        onClick={() => {
          props.projectsActions.removeHeading(
            props.currentProject,
            props.heading,
            props.typeValue
          )
        }}
      >
        options
      </div>
    </div>
  )
}

export default Input
