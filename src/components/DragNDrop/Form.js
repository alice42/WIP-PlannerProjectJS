import React from 'react'
import TodoAccordion from '../Todos/TodoAccordion'
import { StyledInputWrapperLeft } from '../styles/componentsStyles'
import { StyledTodoContainer } from '../Todos/styles/todosStyles'
import { StyledHeadingContainer, styles } from '../Heading/styles/headingStyles'
import InlineGrownInput from '../InlineGrownInput'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(styles)
export default function Form({
  list,
  typeValue,
  text,
  closeForm,
  handleInputChange,
  inputRef
}) {
  const classes = useStyles()

  React.useEffect(() => {
    if (inputRef && inputRef.current) {
      inputRef.current.textContent = text || ''
      if (!text) inputRef.current.focus()
    }
  }, [inputRef])

  const placeholder = list ? 'New Heading' : 'New To-do'

  const handleTypeEditing = (value, type) => {
    handleInputChange(value, type)
    closeForm()
  }
  const renderInput = () => {
    return (
      <StyledInputWrapperLeft>
        <InlineGrownInput
          value={text}
          inputRef={inputRef}
          typeValue={typeValue}
          placeholder={placeholder}
          handleUpdateProject={handleTypeEditing}
        />
      </StyledInputWrapperLeft>
    )
  }

  return list ? (
    <StyledHeadingContainer className={classes.cardHeading}>
      {renderInput()}
    </StyledHeadingContainer>
  ) : (
    <StyledTodoContainer>
      <TodoAccordion label={renderInput()} />
    </StyledTodoContainer>
  )
}
