import React from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import IconButton from '@material-ui/core/IconButton'
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
import MenuIcon from '@material-ui/icons/Menu'
import { StyledCheckpoint } from './styles/todosStyles'

const TodosCheckpoint = ({ todo, checkpoint, handleUpdateTodo, index }) => {
  const classes = StyledCheckpoint()
  const [value, setValue] = React.useState(checkpoint.value)
  const [isInputFocused, setInputFocused] = React.useState(true)

  const handleValue = e => {
    setValue(e.target.value)
  }

  const handleUpdate = () => {
    if (value) {
      const newChecklist = todo.checklist.map(item => {
        if (item.id === checkpoint.id) item = { ...item, value: value }
        return item
      })
      handleUpdateTodo(todo, newChecklist, 'checklist')
    }
  }

  const onPressDeleteCheckpoint = a => {
    const newChecklist = todo.checklist.filter(item => item.id !== a)
    newChecklist && handleUpdateTodo(todo, newChecklist, 'checklist')
  }

  const handleCompleteCheckpoint = e => {
    setInputFocused(false)

    const newChecklist = todo.checklist.map(item => {
      if (item.id === checkpoint.id)
        item = { ...item, isCompleted: !item.isCompleted }
      return item
    })
    !isInputFocused && handleUpdateTodo(todo, newChecklist, 'checklist')
  }

  return (
    <Paper
      tabIndex={index}
      className={classes.root}
      onKeyDown={e => {
        if (e.key === 'Backspace' && !isInputFocused) onPressDeleteCheckpoint()
      }}
      onClick={e => {
        if (e.target.name !== 'input' && e.target.name !== 'checkbox')
          e.currentTarget.focus()
      }}
    >
      <IconButton className={classes.iconButton} aria-label="menu">
        <Checkbox
          name={'checkbox'}
          checked={checkpoint.isCompleted}
          onChange={e => handleCompleteCheckpoint(!checkpoint.isCompleted)}
        />
      </IconButton>
      <InputBase
        disabled={checkpoint.isCompleted}
        name={'input'}
        className={classes.input}
        placeholder="New Checkpoint"
        defaultValue={checkpoint.value}
        autoFocus={isInputFocused}
        onBlur={() => {
          isInputFocused && handleUpdate()
          setInputFocused(false)
        }}
        onFocus={() => setInputFocused(true)}
        onChange={e => handleValue(e)}
      />
      <IconButton className={classes.iconButton} aria-label="menu">
        <MenuIcon />
      </IconButton>
    </Paper>
  )
}

export default TodosCheckpoint
