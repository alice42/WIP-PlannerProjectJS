import React, { useState } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import TodoAccordion from './TodoAccordion'
import { StyledTodoContainer } from './styles/ContentStyles'
import CustomGrowInput from '../CustomGrowInput'

export default function Todos(props) {
  const [isEditing, setIsEditing] = useState(false)
  const [cardText, setText] = useState(props.text)

  React.useEffect(() => {
    if (props.inputRef && props.inputRef.current) {
      props.inputRef.current.textContent = cardText || ''
      props.inputRef.current.focus()
    }
  }, [isEditing])

  const handleTypeEditing = (value, type) => {
    setText(value || 'New To-do')
    saveCard(type)
  }

  const saveCard = type => {
    if (type === 'todo')
      props.projectsActions.editCard(
        props.id,
        props.listID,
        cardText,
        props.currentProject
      )
    setIsEditing(false)
  }

  const handleDeleteCard = () => {
    props.projectsActions.deleteCard(
      props.id,
      props.listID,
      props.currentProject
    )
  }

  const renderEditForm = () => {
    return (
      <div
        style={{
          display: 'block',
          width: '100%',
          textAlign: 'left'
        }}
      >
        <CustomGrowInput
          {...props}
          inputRef={props.inputRef}
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
          onMouseDown={e => {
            e.currentTarget.focus()
          }}
          onDoubleClick={() => setIsEditing(true)}
        >
          <TodoAccordion
            currentTodo={props.todo}
            label={isEditing ? renderEditForm() : cardText}
            handleDeleteCard={handleDeleteCard}
          />
        </StyledTodoContainer>
      )}
    </Draggable>
  )
}
