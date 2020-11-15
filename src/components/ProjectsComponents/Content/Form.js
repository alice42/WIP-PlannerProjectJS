import React from 'react'
import TodoAccordion from './TodoAccordion'
import {
  StyledTodoContainer,
  StyledInput,
  StyledHeadingContainer
} from './styles/ContentStyles'
import CustomGrowInput from '../CustomGrowInput'
export default function Form({
  list,
  typeValue,
  text,
  onChange,
  closeForm,
  children,
  handleAddItem,
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
      <div
        style={{
          display: 'block',
          width: '100%',
          textAlign: 'left'
        }}
      >
        <CustomGrowInput
          value={text}
          inputRef={inputRef}
          typeValue={typeValue}
          placeholderValue={placeholder}
          handleTypeEditing={handleTypeEditing}
        />
      </div>
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
