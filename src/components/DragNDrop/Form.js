import React from 'react'
import TodoAccordion from './Todos/TodoAccordion'
import {
  StyledTodoContainer,
  StyledHeadingContainer,
  StyledInputWrapperLeft
} from './styles/dndStyles'
import InlineGrownInput from '../InlineGrownInput'

export default function Form({
  list,
  typeValue,
  text,
  closeForm,
  handleInputChange,
  inputRef
}) {
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
          handleInputEditing={handleTypeEditing}
        />
      </StyledInputWrapperLeft>
    )
  }

  return list ? (
    <StyledHeadingContainer>{renderInput()}</StyledHeadingContainer>
  ) : (
    <StyledTodoContainer>
      <TodoAccordion label={renderInput()} />
    </StyledTodoContainer>
  )
}
