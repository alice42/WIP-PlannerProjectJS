import React from 'react'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import InputHeading from './InputHeding'
const grid = 8

const getItemStyle = (isDragging, draggableStyle) => ({
  display: 'flex',
  userSelect: 'none',
  // padding: grid * 2,
  // margin: `0 10px 10px 0`,
  display: 'inline-flex',
  // padding: '10px',
  // background: isDragging ? 'lightgreen' : 'grey',
  display: 'inline-flex',
  // padding: '10px',
  // margin: '0 10px 10px 0',
  // border: '1px solid grey',
  ...draggableStyle
})

const getListStyle = isDraggingOver => ({
  // background: isDraggingOver ? 'lightblue' : 'lightgrey',
  padding: grid,
  margin: '10px 0'
})

export default class Zone extends React.Component {
  render() {
    return (
      <Droppable droppableId={this.props.type} type={`droppableSubItem`}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}
          >
            {this.props.subItems &&
              this.props.subItems.map((item, index) => {
                return (
                  <Draggable
                    key={item.id}
                    draggableId={`${item.id}`}
                    index={index}
                  >
                    {(provided, snapshot) => (
                      <div
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        style={getItemStyle(
                          snapshot.isDragging,
                          provided.draggableProps.style
                        )}
                      >
                        <InputHeading
                          {...this.props}
                          item={item}
                          typeValue={'todos'}
                          placeholderValue={'New Todo'}
                        />
                        {provided.placeholder}
                      </div>
                    )}
                  </Draggable>
                )
              })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    )
  }
}
