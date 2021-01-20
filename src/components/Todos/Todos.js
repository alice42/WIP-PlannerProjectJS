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

  const handleDeleteCard = () =>
    props.projectsActions.deleteCard(props.id, props.listID, props.project)

  const renderEditForm = () => {
    return (
      <InlineGrownInput
        inputRef={inputRefTodo}
        value={cardText}
        typeValue={'todo'}
        placeholder={'New To-do'}
        handleUpdateProject={handleTypeEditing}
      />
    )
  }
  return (
    <Draggable draggableId={String(props.id)} index={props.index}>
      {provided => (
        <StyledTodoContainer
          onMouseDown={e => {
            e.currentTarget.focus()
          }}
          onDoubleClick={() => setIsEditing(true)}
        >
          <TodoAccordion
            {...props}
            draggableProps={provided.draggableProps}
            dragHandleProps={provided.dragHandleProps}
            dNdRef={provided.innerRef}
            list={props.listID}
            isEditing={isEditing}
            currentTodo={props.todo}
            label={
              isEditing ? (
                renderEditForm()
              ) : (
                <div
                  style={{
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    textOverflow: 'ellipsis',
                    maxWidth: '40vw'
                  }}
                >
                  {cardText}
                </div>
              )
            }
            handleDeleteCard={handleDeleteCard}
          />
        </StyledTodoContainer>
      )}
    </Draggable>
  )
}

export default Todos
