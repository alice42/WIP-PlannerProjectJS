import React, { useState } from 'react'
import TrelloCard from './TrelloCard'
import TrelloCreate from './TrelloCreate'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import styled from 'styled-components'
import { editTitle } from '../../actions/projectsActions'

const StyledInput = styled.input`
  background: none;
  text-decoration: none;
  border: none;
  outline: none;
  font: inherit;
  border-bottom: 1px solid black;
  text-align: start;
  padding-left: 10px;
  margin: unset;
  width: -webkit-fill-available;
`
const StyledList = styled.div`
  border-radius: 3px;
  padding: 8px;
  height: 100%;
  margin: 8px;
  ${props =>
    props['data-rbd-drag-handle-draggable-id'] === 'list-0' ||
    'background-color: grey'};
  h4 {
    ${props =>
      props['data-rbd-drag-handle-draggable-id'] === 'list-0' ||
      `
      border-bottom: 1px solid black;
      text-align: start;
      padding-left: 10px;
      margin: 0 0 5px 0;
      `}
  }
`

export default function TrelloList(props) {
  const [isEditing, setIsEditing] = useState(false)
  const [listTitle, setListTitle] = useState(props.title)

  const renderEditInput = () => {
    return (
      <StyledInput
        type="text"
        value={listTitle}
        onChange={handleChange}
        autoFocus
        onFocus={handleFocus}
        onBlur={handleFinishEditing}
      />
    )
  }

  const handleFocus = e => {
    console.log('hi')

    e.target.select()
  }

  const handleChange = e => {
    e.preventDefault()
    setListTitle(e.target.value)
  }

  const handleFinishEditing = e => {
    setIsEditing(false)
    dispatch(editTitle(props.listID, listTitle))
  }

  return (
    <Draggable draggableId={String(props.listID)} index={props.index}>
      {provided => (
        <StyledList
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
                {isEditing ? (
                  renderEditInput()
                ) : (
                  <h4 onClick={() => setIsEditing(true)}>{listTitle}</h4>
                )}

                {props.cards.map((card, index) => (
                  <TrelloCard
                    {...props}
                    key={card.id}
                    text={card.text}
                    id={card.id}
                    index={index}
                    listID={props.listID}
                  />
                ))}
                {provided.placeholder}
                <TrelloCreate {...props} listID={props.listID} />
              </div>
            )}
          </Droppable>
        </StyledList>
      )}
    </Draggable>
  )
}
