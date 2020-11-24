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
  const [bodyType, setBodyType] = React.useState(null)

  React.useEffect(() => {
    setBodyType(Object.keys(expanded)[0])
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
    // handleClosePopper()
    setExpanded({})
  }

  // const handleClosePopper = () => {
  //   setOpen(false)
  //   setBodyType(null)
  // }

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
  const body = (
    <PopperBody
      {...props}
      bodyType={bodyType}
      options={[]}
      handleUpdate={handleUpdateTodo}
      toUpdate={props.currentTodo}
      handleClose={handleClose}
    />
  )

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <span style={{ display: 'flex' }}>
        {options.map((option, index) => (
          <div key={index}>
            <TodosOptionsItem
              key={index}
              option={option}
              expanded={expanded}
              currentTodo={props.currentTodo}
              handleClose={handleClose}
              handleClick={handleClick}
              // handleClosePopper={handleClosePopper}
            />
          </div>
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
