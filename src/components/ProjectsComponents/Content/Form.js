import React from 'react'
import TodoAccordion from './TodoAccordion'
import {
  StyledTodoContainer,
  StyledInput,
  StyledHeadingContainer
} from './styles/ContentStyles'

export default function Form({
  list,
  text = '',
  onChange,
  closeForm,
  children,
  handleAddItem
}) {
  const placeholder = list ? 'New Heading' : 'New To-do'

  const renderInput = () => (
    <>
      <StyledInput
        placeholder={placeholder}
        autoFocus
        value={text}
        onChange={e => onChange(e)}
        onBlur={handleAddItem}
        onKeyPress={event => {
          if (event.key === 'Enter') {
            handleAddItem()
            closeForm()
          }
        }}
      />
      {children}
    </>
  )

  return list ? (
    <StyledHeadingContainer>{renderInput()}</StyledHeadingContainer>
  ) : (
    <StyledTodoContainer>
      <TodoAccordion label={renderInput()} />
    </StyledTodoContainer>
  )
}
