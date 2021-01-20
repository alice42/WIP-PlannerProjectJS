import React from 'react'
import TodosCheckpoint from './TodosCheckpoint'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

function TodosChecklist({ todo, handleUpdateTodo }) {
  const [items, setItems] = React.useState(todo.checklist)

  React.useEffect(() => {
    todo.checklist && setItems(todo.checklist)
  })

  const onDragEnd = result => {
    if (!result.destination) {
      return
    }
    const newItems = reorder(
      items,
      result.source.index,
      result.destination.index
    )
    setItems(newItems)
    handleUpdateTodo(todo, newItems, 'checklist')
  }

  return (
    <DragDropContext onDragEnd={onDragEnd} style={{ pointer: 'none' }}>
      <Droppable droppableId="droppable_A" type="checkpoint">
        {provided => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={{
              margin: '10px'
            }}
          >
            {items &&
              items.map((item, index) => (
                <Draggable
                  key={`${item.id}`}
                  draggableId={`${item.id}`}
                  index={index}
                >
                  {provided => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <TodosCheckpoint
                        key={index}
                        index={index}
                        todo={todo}
                        checkpoint={item}
                        handleUpdateTodo={handleUpdateTodo}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default TodosChecklist
