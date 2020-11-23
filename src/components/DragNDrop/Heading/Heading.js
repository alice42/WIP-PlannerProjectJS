import React, { useState } from 'react'
import Todos from '../Todos/Todos'
import Create from '../Create'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import {
  StyledHeadingContainer,
  StyledInputWrapperLeft
} from '../styles/dndStyles'
import InlineGrownInput from '../../InlineGrownInput'

const Heading = props => {
  const inputRefTodo = React.useRef(null)
  const [isEditing, setIsEditing] = useState(false)
  const [listTitle, setListTitle] = useState(props.title)

  React.useEffect(() => {
    if (props.inputRef && props.inputRef.current) {
      props.inputRef.current.textContent = listTitle || ''
      props.inputRef.current.focus()
    }
  }, [isEditing])

  const handleTypeEditing = (value, type) => {
    if (type === 'heading') {
      setListTitle(value)
    }
    handleFinishEditing()
  }

  const handleFinishEditing = () => {
    setIsEditing(false)
    props.projectsActions.editTitle(
      props.listID,
      listTitle,
      props.currentProject
    )
  }

  const handledeleteList = () => {
    props.projectsActions.deleteList(props.listID, props.currentProject)
  }

  const renderEditInput = () => {
    return (
      <StyledInputWrapperLeft>
        <InlineGrownInput
          {...props}
          inputRef={props.inputRef}
          value={listTitle}
          typeValue={'heading'}
          placeholder={'New Heading'}
          handleInputEditing={handleTypeEditing}
        />
      </StyledInputWrapperLeft>
    )
  }

  return (
    <Draggable
      draggableId={String(props.listID)}
      index={props.index}
      isDragDisabled={props.listID === 'list-0' ? true : false}
    >
      {provided => (
        <StyledHeadingContainer
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          onMouseDown={e => e.currentTarget.focus()}
        >
          <Droppable droppableId={String(props.listID)} type="card">
            {provided => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {isEditing
                  ? renderEditInput()
                  : props.listID !== 'list-0' && (
                      <h4>
                        <div onClick={() => setIsEditing(true)}>
                          {listTitle}
                        </div>
                        {/* <Options /> */}
                      </h4>
                    )}

                {props.cards.map((card, index) => (
                  <Todos
                    inputRef={inputRefTodo}
                    {...props}
                    todo={card}
                    key={card.id}
                    title={card.title}
                    id={card.id}
                    index={index}
                    listID={props.listID}
                  />
                ))}
                {provided.placeholder}
                <Create
                  {...props}
                  listID={props.listID}
                  inputRef={inputRefTodo}
                />
              </div>
            )}
          </Droppable>
        </StyledHeadingContainer>
      )}
    </Draggable>
  )
}

export default Heading
