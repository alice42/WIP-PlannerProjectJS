import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import Checkbox from '@material-ui/core/Checkbox'
import IconButton from '@material-ui/core/IconButton'
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: '2px',
    marginBottom: '2px',
    display: 'flex',
    alignItems: 'center',
    width: '100%'
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    fontSize: '13px',
    '& .MuiInputBase-input': {
      padding: 0
    }
  },
  iconButton: {
    '& .MuiCheckbox-root': {
      '& .MuiSvgIcon-root': {
        fontSize: '17px',
        margin: '3px'
      },
      padding: 0
    },
    '& .MuiSvgIcon-root': {
      fontSize: '17px',
      margin: '3px'
    },
    padding: 0
  },
  divider: {
    height: 28,
    margin: 4
  }
}))

const TodosCheckpoint = ({ todo, checkpoint, handleUpdateTodo }) => {
  const classes = useStyles()
  const [value, setValue] = React.useState(checkpoint.value)

  const handleValue = e => {
    setValue(e.target.value)
  }

  const handleUpdate = () => {
    const newChecklist = todo.checklist.map(item => {
      if (item.id === checkpoint.id) item = { ...item, value: value }
      return item
    })
    if (value && newChecklist) {
      handleUpdateTodo(todo, newChecklist, 'checklist')
    }
  }
  return (
    <Paper component="form" className={classes.root}>
      <IconButton className={classes.iconButton} aria-label="menu">
        <Checkbox />
      </IconButton>
      <InputBase
        autoFocus
        onBlur={handleUpdate}
        onChange={e => handleValue(e)}
        defaultValue={value}
        className={classes.input}
        placeholder="Search Google Maps"
      />
      <IconButton className={classes.iconButton} aria-label="menu">
        <MenuIcon />
      </IconButton>
    </Paper>
  )
}

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
    const itemsA = reorder(items, result.source.index, result.destination.index)
    setItems(itemsA)
    handleUpdateTodo(todo, itemsA, 'checklist')
  }

  return (
    <DragDropContext onDragEnd={onDragEnd} style={{ pointer: 'none' }}>
      <Droppable droppableId="droppable_A" type="checkpoint">
        {provided => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={{ margin: '10px' }}
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
