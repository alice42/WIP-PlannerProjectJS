import React from 'react'
import TodosOptionsItem from './TodosOptionsItem'
import { PopperContainer, PopperBody } from '../Popper'
import { setOptionsTodos, isMounted } from './utils'
import { ClickAwayListener } from '@material-ui/core'

const TodosOptions = props => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [open, setOpen] = React.useState(false)
  const [placement, setPlacement] = React.useState()
  const [expanded, setExpanded] = React.useState({})
  const [body, setBody] = React.useState(null)

  React.useEffect(() => {
    isMounted &&
      setBody(
        <PopperBody
          {...props}
          bodyType={Object.keys(expanded)[0]}
          options={[]}
          handleUpdate={handleUpdateTodo}
          toUpdate={props.currentTodo}
          handleClose={handleClose}
        />
      )
  }, [expanded])

  const handleClickAway = () => {
    handleClose()
  }

  const handleClick = (id, newPlacement, event) => {
    handleClose()
    setExpanded({
      [id]: !expanded[id]
    })
    if (!expanded[id]) {
      setAnchorEl(event.currentTarget)
      setOpen(prev => placement !== newPlacement || !prev)
      setPlacement(newPlacement)
    }
  }

  const handleClose = () => {
    setOpen(false)
    setBody(null)
    setExpanded({})
  }

  const handleUpdateTodo = (itemType, newValue, valueType) => {
    props.projectsActions.updateTodo(
      itemType,
      newValue,
      valueType,
      props.currentProject,
      props.list
    )
    handleClose()
  }

  const options = setOptionsTodos()

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <span>
        {options.map((option, index) => (
          <TodosOptionsItem
            key={index}
            option={option}
            expanded={expanded}
            currentTodo={props.currentTodo}
            handleClose={handleClose}
            handleClick={handleClick}
          />
        ))}
        <PopperContainer
          open={open}
          anchorEl={anchorEl}
          placement={placement}
          body={body}
        />
      </span>
    </ClickAwayListener>
  )
}

export default TodosOptions
