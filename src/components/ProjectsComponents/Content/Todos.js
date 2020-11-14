import React, { useState } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import TodoAccordion from './TodoAccordion'
import { StyledInput, StyledTodoContainer } from './styles/ContentStyles'

import CustomGrowInput from '../CustomGrowInput'

export default function Todos(props) {
  const [isEditing, setIsEditing] = useState(false)
  const [cardText, setText] = useState(props.text)

  const handleTypeEditing = (value, type) => {
    setText(value)
    saveCard()
  }

  const saveCard = () => {
    props.projectsActions.editCard(
      props.id,
      props.listID,
      cardText,
      props.currentProject
    )
    setIsEditing(false)
  }

  const handleDeleteCard = () => {
    console.log(props.id, props.listID, props.currentProject)
    props.projectsActions.deleteCard(
      props.id,
      props.listID,
      props.currentProject
    )
  }

  const renderEditForm = () => {
    return (
      // <>
      //   <StyledInput
      //     placeholder={'New To-do'}
      //     type="text"
      //     value={cardText}
      //     onChange={handleChange}
      //     autoFocus
      //     onBlur={saveCard}
      //     onKeyPress={event => {
      //       if (event.key === 'Enter') {
      //         saveCard(event)
      //       }
      //     }}
      //   />
      // </>
      <div
        style={{
          display: 'block',
          width: '100%',
          textAlign: 'left'
          // paddingLeft: '20px'
        }}
      >
        <CustomGrowInput
          {...props}
          value={cardText}
          typeValue={'todo'}
          placeholderValue={'New To-do'}
          handleTypeEditing={handleTypeEditing}
        />
      </div>
    )
  }
  return (
    <Draggable draggableId={String(props.id)} index={props.index}>
      {provided => (
        <StyledTodoContainer
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          onDoubleClick={() => setIsEditing(true)}
        >
          <TodoAccordion
            label={isEditing ? renderEditForm() : cardText}
            handleDeleteCard={handleDeleteCard}
          />
        </StyledTodoContainer>
      )}
    </Draggable>
  )
}
