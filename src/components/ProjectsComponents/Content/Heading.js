import React, { useState } from 'react'
import Todos from './Todos'
import Create from './Create'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import { StyledHeadingContainer } from './styles/ContentStyles'
import CustomGrowInput from '../CustomGrowInput'
// import Options from '../Options'

export default function Heading(props) {
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
      <div
        style={{
          display: 'block',
          width: '100%',
          textAlign: 'left',
          paddingLeft: '20px',
          marginBottom: '6px'
        }}
      >
        <CustomGrowInput
          {...props}
          inputRef={props.inputRef}
          value={listTitle}
          typeValue={'heading'}
          placeholderValue={'New Heading'}
          handleTypeEditing={handleTypeEditing}
        />
      </div>
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
