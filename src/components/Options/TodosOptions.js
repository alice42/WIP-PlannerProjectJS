import React from 'react'
import ExpandInput from '../ExpandInput'
import { optionsTodos } from './utils'
import { ClickAwayListener } from '@material-ui/core'

const TodosOptions = props => {
  const [expanded, setExpanded] = React.useState({})
  const [bodyType, setBodyType] = React.useState(null)

  React.useEffect(() => {
    setBodyType(Object.keys(expanded)[0])
  }, [expanded])

  const handleClick = id => {
    setExpanded({
      [id]: !expanded[id]
    })
  }

  const handleClose = () => {
    setExpanded({})
  }

  const handleUpdateTodo = (
    { itemType = props.currentTodo },
    newValue,
    valueType
  ) => {
    props.projectsActions.updateTodo(
      itemType,
      newValue,
      valueType,
      props.project,
      props.list
    )
    handleClose()
  }

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <span style={{ display: 'flex' }}>
        {props.currentTodo &&
          optionsTodos.map((option, index) => (
            <div key={index}>
              <ExpandInput
                {...props}
                project={props.project}
                todo={props.currentTodo}
                id={option.id}
                expanded={expanded}
                icon={option.icon}
                option={option.title}
                handleClose={handleClose}
                handleClick={handleClick}
                bodyType={bodyType}
                handleUpdate={handleUpdateTodo}
              />
            </div>
          ))}
      </span>
    </ClickAwayListener>
  )
}

export default TodosOptions
