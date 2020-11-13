import React, { useState } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import TodoAccordion from './TodoAccordion'
import { StyledInput, StyledTodoContainer } from './styles/ContentStyles'

export default function Todos(props) {
  const [isEditing, setIsEditing] = useState(false)
  const [cardText, setText] = useState(props.text)

  const handleChange = e => {
    setText(e.target.value)
  }

  const saveCard = e => {
    e.preventDefault()

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
      <>
        <StyledInput
          placeholder={'New To-do'}
          type="text"
          value={cardText}
          onChange={handleChange}
          autoFocus
          onBlur={saveCard}
          onKeyPress={event => {
            if (event.key === 'Enter') {
              saveCard(event)
            }
          }}
        />
      </>
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
            label={isEditing ? renderEditForm() : props.text}
            handleDeleteCard={handleDeleteCard}
          />
        </StyledTodoContainer>
      )}
    </Draggable>
  )
}
