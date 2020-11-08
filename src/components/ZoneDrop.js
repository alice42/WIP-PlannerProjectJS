import React from 'react'
import InputHeading from './InputHeding'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import Zone from './Zone'

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

const grid = 8

const getItemStyle = (isDragging, draggableStyle) => ({
  userSelect: 'none',
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,
  background: isDragging ? 'lightgreen' : 'grey',
  ...draggableStyle
})

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? 'lightblue' : 'lightgrey',
  padding: grid
})

export default function ZoneDrop(props) {
  const [items, setitems] = React.useState()

  React.useEffect(() => {
    console.log([
      ...props.currentProject.todos,
      ...props.currentProject.heading
    ])
    setitems([...props.currentProject.todos, ...props.currentProject.heading])
  }, [props.currentProject.heading])

  const onDragEnd = result => {
    if (!result.destination) {
      return
    }

    const sourceIndex = result.source.index
    const destIndex = result.destination.index

    if (result.type === 'droppableItemA') {
      const itemsUpdated = reorder(items, sourceIndex, destIndex)

      setitems(itemsUpdated)
    } else if (result.type === 'droppableSubItem') {
      const itemSubItemMap = items.reduce((acc, item) => {
        acc[item.id] = item.subItems
        return acc
      }, {})

      const sourceParentId = result.source.droppableId
      const destParentId = result.destination.droppableId

      const sourceSubItems = itemSubItemMap[sourceParentId]
      const destSubItems = itemSubItemMap[destParentId]

      let newItems = [...items]

      if (sourceParentId === destParentId) {
        const reorderedSubItems = reorder(
          sourceSubItems,
          sourceIndex,
          destIndex
        )
        newItems = newItems.map(item => {
          if (item.id === sourceParentId) {
            item.subItems = reorderedSubItems
          }
          return item
        })
        setitems(newItems)
      } else {
        let newSourceSubItems = [...sourceSubItems]
        const [draggedItem] = newSourceSubItems.splice(sourceIndex, 1)

        let newDestSubItems = [...destSubItems]
        newDestSubItems.splice(destIndex, 0, draggedItem)
        newItems = newItems.map(item => {
          if (item.id === sourceParentId) {
            item.subItems = newSourceSubItems
          } else if (item.id === destParentId) {
            item.subItems = newDestSubItems
          }
          return item
        })
        setitems(newItems)
      }
    }
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable" type="droppableItem">
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}
          >
            {items &&
              items.map(
                (item, index) =>
                  (item.disabled && (
                    <Draggable
                      key={item.id}
                      draggableId={`${item.id}`}
                      index={index}
                      isDragDisabled={true}
                    >
                      {(provided, snapshot) => (
                        <div>
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            style={getItemStyle(
                              snapshot.isDragging,
                              provided.draggableProps.style
                            )}
                          >
                            {item.content}

                            {item.disabled || (
                              <span
                                {...provided.dragHandleProps}
                                style={{
                                  display: 'inline-block',
                                  margin: '0 10px',
                                  border: '1px solid #000'
                                }}
                              >
                                Drag
                              </span>
                            )}
                            <Zone
                              {...props}
                              subItems={item.subItems}
                              type={`${item.id}`}
                            />
                          </div>
                          {provided.placeholder}
                        </div>
                      )}
                    </Draggable>
                  )) || (
                    <Droppable
                      key={item.id}
                      droppableId="droppable"
                      type="droppableItemA"
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          style={getListStyle(snapshot.isDraggingOver)}
                        >
                          <Draggable
                            isDragDisabled={items.disabled}
                            key={item.id}
                            draggableId={`${item.id}`}
                            index={index}
                          >
                            {(provided, snapshot) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                style={getItemStyle(
                                  snapshot.isDragging,
                                  provided.draggableProps.style
                                )}
                              >
                                <InputHeading
                                  {...props}
                                  heading={item}
                                  typeValue={'heading'}
                                  placeholderValue={'New Heading'}
                                />

                                <span
                                  {...provided.dragHandleProps}
                                  style={{
                                    display: 'inline-block',
                                    margin: '0 10px',
                                    border: '1px solid #000'
                                  }}
                                >
                                  Drag
                                </span>

                                <Zone
                                  subItems={item.subItems}
                                  type={`${item.id}`}
                                />
                                {provided.placeholder}
                              </div>
                            )}
                          </Draggable>
                        </div>
                      )}
                    </Droppable>
                  )
              )}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <div onClick={props.handleAddHeading}>add heading</div>
      <div onClick={props.handleAddTodo}>add todo</div>
    </DragDropContext>
  )
}
