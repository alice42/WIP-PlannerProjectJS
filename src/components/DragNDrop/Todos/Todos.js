import React, { useState } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import TodoAccordion from '../Todos/TodoAccordion'
import {
  StyledTodoContainer,
  StyledInputWrapperLeft
} from '../styles/dndStyles'
import InlineGrownInput from '../../InlineGrownInput'

const Todos = props => {
  const [isEditing, setIsEditing] = useState(false)
  const [cardText, setText] = useState(props.title)

  React.useEffect(() => {
    if (props.inputRef && props.inputRef.current) {
      props.inputRef.current.textContent = cardText || ''
      props.inputRef.current.focus()
    }
  }, [isEditing])

  const handleTypeEditing = (value, type) => {
    setText(value)
    saveCard(value)
  }

  const saveCard = value => {
    props.projectsActions.editCard(
      props.id,
      props.listID,
      value,
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
      <StyledInputWrapperLeft>
        <InlineGrownInput
          {...props}
          inputRef={props.inputRef}
          value={cardText}
          typeValue={'todo'}
          placeholder={'New To-do'}
          handleInputEditing={handleTypeEditing}
        />
      </StyledInputWrapperLeft>
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
            {...props}
            list={props.listID}
            currentTodo={props.todo}
            label={isEditing ? renderEditForm() : cardText}
            handleDeleteCard={handleDeleteCard}
          />
        </StyledTodoContainer>
      )}
    </Draggable>
  )
}

export default Todos
