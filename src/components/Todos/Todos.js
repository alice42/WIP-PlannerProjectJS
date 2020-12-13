import React, { useState } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import TodoAccordion from './TodoAccordion'
import { StyledInputWrapperLeft } from '../styles/componentsStyles'
import { StyledTodoContainer } from './styles/todosStyles'
import InlineGrownInput from '../InlineGrownInput'

const Todos = props => {
  const inputRefTodo = React.useRef(null)
  const [isEditing, setIsEditing] = useState(false)
  const [cardText, setText] = useState(props.title)

  React.useEffect(() => {
    if (inputRefTodo && inputRefTodo.current) {
      inputRefTodo.current.textContent = cardText || ''
      if (!cardText) inputRefTodo.current.focus()
    }
  }, [isEditing])

  const handleTypeEditing = (value, type) => {
    setText(value)
    saveCard(value)
  }

  const saveCard = value => {
    props.projectsActions.editCard(props.id, props.listID, value, props.project)
    setIsEditing(false)
  }

  const handleDeleteCard = () => {
    props.projectsActions.deleteCard(props.id, props.listID, props.project)
  }

  const renderEditForm = () => {
    return (
      <StyledInputWrapperLeft>
        <InlineGrownInput
          {...props}
          inputRef={inputRefTodo}
          value={cardText}
          typeValue={'todo'}
          placeholder={'New To-do'}
          handleUpdateProject={handleTypeEditing}
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
