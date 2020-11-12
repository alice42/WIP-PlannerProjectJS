import React from 'react'
import TrelloList from './TrelloList'
import TrelloCreate from './TrelloCreate'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

export default function Drop(props) {
  const onDragEnd = result => {
    const { destination, source, draggableId, type } = result
    if (
      !destination ||
      (type === 'list' && (source.index === 0 || destination.index === 0))
    ) {
      return
    }

    props.projectsActions.sort(
      source.droppableId,
      destination.droppableId,
      source.index,
      destination.index,
      draggableId,
      type,
      props.currentProject
    )
  }

  const { lists } = props.currentProject
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="all-lists" type="list">
        {provided => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {lists.map((list, index) => (
              <TrelloList
                {...props}
                listID={list.id}
                key={list.id}
                title={list.title}
                cards={list.cards}
                index={index}
              />
            ))}
            {provided.placeholder}
            <TrelloCreate {...props} list />
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}