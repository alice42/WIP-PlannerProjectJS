import React, { useState } from 'react'
import Todos from './Todos'
import Create from './Create'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import { StyledInput, StyledHeadingContainer } from './styles/ContentStyles'
import Icon from '@material-ui/core/icon'

export default function Heading(props) {
  const [isEditing, setIsEditing] = useState(false)
  const [listTitle, setListTitle] = useState(props.title)

  const handleChange = e => {
    e.preventDefault()
    setListTitle(e.target.value)
  }

  const handleFinishEditing = e => {
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
      <StyledInput
        type="text"
        placeholder={'New Heading'}
        value={listTitle}
        onChange={handleChange}
        autoFocus
        onBlur={handleFinishEditing}
        onKeyPress={event => {
          if (event.key === 'Enter') {
            handleFinishEditing()
          }
        }}
      />
    )
  }

  return (
    <Draggable draggableId={String(props.listID)} index={props.index}>
      {provided => (
        <StyledHeadingContainer
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Droppable droppableId={String(props.listID)} type="card">
            {provided => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={{ width: 'inherit', textAlign: 'start' }}
              >
                {isEditing
                  ? renderEditInput()
                  : props.listID !== 'list-0' && (
                      <h4 onClick={() => setIsEditing(true)}>
                        {listTitle}
                        <div>
                          <Icon>date_range</Icon>
                          <Icon onClick={handledeleteList}>delete</Icon>
                        </div>
                      </h4>
                    )}

                {props.cards.map((card, index) => (
                  <Todos
                    {...props}
                    key={card.id}
                    text={card.text}
                    id={card.id}
                    index={index}
                    listID={props.listID}
                  />
                ))}
                {provided.placeholder}
                <Create {...props} listID={props.listID} />
              </div>
            )}
          </Droppable>
        </StyledHeadingContainer>
      )}
    </Draggable>
  )
}
