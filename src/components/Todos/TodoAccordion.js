import React from 'react'
import Accordion from '@material-ui/core/Accordion'
import Checkbox from '@material-ui/core/Checkbox'
import {
  useStyledTodoWrapper,
  StyledAccordionSummary,
  StyledFormControlLabel,
  StyledAccordionDetails
} from './styles/todosStyles'
import TodosNotes from './TodosNotes'
import TodosOptions from './TodosOptions'
import TodosChecklist from './TodosChecklist'
import TodosSettingsNotExpanded from './TodosSettingsNotExpanded'
import ProgressBar from './ProgressBar'

const TodosAccordion = props => {
  const [expanded, setExpanded] = React.useState(false)
  const classes = useStyledTodoWrapper()
  const label = <div onClick={e => e.preventDefault()}>{props.label}</div>

  const handleUpdateTodo = (itemType, newValue, valueType) => {
    props.projectsActions.updateTodo(
      itemType,
      newValue,
      valueType,
      props.project,
      props.list
    )
  }

  const value =
    props.currentTodo &&
    props.currentTodo.checklist &&
    props.currentTodo &&
    props.currentTodo.checklist.filter(item => item.isCompleted).length
  const MIN = 0
  const MAX =
    props.currentTodo &&
    props.currentTodo.checklist &&
    props.currentTodo.checklist.length
  const normalise = value => ((value - MIN) * 100) / (MAX - MIN)

  return (
    <Accordion
      ref={props.dNdRef}
      {...props.draggableProps}
      className={classes.root}
      onChange={() => setExpanded(!expanded)}
    >
      <StyledAccordionSummary
        {...props.dragHandleProps}
        aria-label="Expand"
        aria-controls="additional-actions3-content"
        id={`additional-actions3-header_${props.index}`}
      >
        <StyledFormControlLabel
          aria-label="Acknowledge"
          onClick={e => e.stopPropagation()}
          control={
            !props.a && (
              <Checkbox
                checked={
                  (props.currentTodo && props.currentTodo.isCompleted) ||
                  normalise(value) === 100
                }
                onChange={e =>
                  handleUpdateTodo(
                    props.currentTodo,
                    e.target.checked,
                    'isCompleted'
                  )
                }
              />
            )
          }
          label={label}
        />
        {!expanded && !props.isEditing && (
          <TodosSettingsNotExpanded currentTodo={props.currentTodo} />
        )}
        {expanded && !props.isEditing && (
          <ProgressBar
            todo={props.currentTodo}
            value={normalise(value)}
            MIN={MIN}
            MAX={MAX}
          />
        )}
      </StyledAccordionSummary>
      {props.currentTodo && (
        <StyledAccordionDetails>
          <TodosNotes
            {...props}
            todo={props.currentTodo}
            handleUpdateTodo={handleUpdateTodo}
          />
          <TodosChecklist
            {...props}
            todo={props.currentTodo}
            handleUpdateTodo={handleUpdateTodo}
          />
          <TodosOptions
            {...props}
            todos
            list={props.list}
            todo={props.currentTodo}
            handleUpdateTodo={handleUpdateTodo}
            handleDeleteCard={props.handleDeleteCard}
          />
        </StyledAccordionDetails>
      )}
    </Accordion>
  )
}

export default TodosAccordion
