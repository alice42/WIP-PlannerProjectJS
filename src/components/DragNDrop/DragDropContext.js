import React from 'react'
import Heading from '../Heading/Heading'
import Create from './Create'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

export default function DnDContext(props) {
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
              <Heading
                {...props}
                listID={list.id}
                key={list.id}
                title={list.title}
                cards={list.cards}
                index={index}
              />
            ))}
            {provided.placeholder}
            <Create {...props} list />
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}
