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
  handleInputChange
}) {
  const placeholder = list ? 'New Heading' : 'New To-do'
  const handleTypeEditing = (value, type) => {
    handleInputChange(value, type)
    closeForm()
  }
  const renderInput = () => (
    <>
      {/* //   <StyledInput
    //     placeholder={placeholder}
    //     autoFocus
    //     value={text}
    //     onChange={e => onChange(e)}
    //     onBlur={handleAddItem}
    //     onKeyPress={event => {
    //       if (event.key === 'Enter') {
    //         handleAddItem()
    //         closeForm()
    //       }
    //     }}
    //   />
    //   {children}
    // </> */}
      <div
        style={{
          display: 'block',
          width: '100%',
          textAlign: 'left'
          // paddingLeft: '20px'
        }}
      >
        <CustomGrowInput
          // {...props}
          value={text}
          typeValue={typeValue}
          placeholderValue={placeholder}
          handleTypeEditing={handleTypeEditing}
        />
      </div>
      {/* {children} */}
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
