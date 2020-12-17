import React from 'react'
import ExpandInput from '../ExpandInput'
import { optionsTodos } from '../utils'
import { ClickAwayListener, makeStyles } from '@material-ui/core'
import TodosSettingsList from './TodosSettingsList'
import { styles } from './styles/todosStyles'
import Tags from '../Tags/Tags'

const useStyles = makeStyles(styles)

const TodosOptions = props => {
  const [open, setOpen] = React.useState({})
  const classes = useStyles()
  const handleOpen = id => {
    setOpen({
      [id]: !open[id]
    })
  }
  const handleClose = () => {
    setOpen({})
  }

  const handleSetValue = (value, type) => {
    if (type === 'tag') props.handleUpdateTodo(props.todo, value, 'tags')
    else if (type === 'when' || type === 'deadline')
      props.handleUpdateTodo(props.todo, value, type)
    setOpen({})
  }

  return (
    <div>
      {props.todo && props.todo.tags && (
        <Tags
          open={true}
          project={props.todo}
          handleUpdate={props.handleUpdateTodo}
        />
      )}
      <div className={classes.wrapper}>
        <TodosSettingsList
          todos
          currentTodo={props.todo}
          handleUpdateTodo={props.handleUpdateTodo}
        />
        <ClickAwayListener onClickAway={handleClose}>
          <span className={classes.options}>
            {optionsTodos.map((option, index) => {
              return (
                <ExpandInput
                  key={index}
                  handleSetValue={handleSetValue}
                  handleUpdateTodo={props.handleUpdateTodo}
                  handleOpen={handleOpen}
                  handleClose={handleClose}
                  open={open}
                  option={option}
                  todo={props.todo}
                  project={props.project}
                />
              )
            })}
          </span>
        </ClickAwayListener>
      </div>
    </div>
  )
}

export default TodosOptions
