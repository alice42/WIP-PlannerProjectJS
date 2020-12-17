import React from 'react'
import Typography from '@material-ui/core/Typography'
import Accordion from '@material-ui/core/Accordion'
import Checkbox from '@material-ui/core/Checkbox'
import {
  useStyledTodoWrapper,
  StyledAccordionSummary,
  StyledFormControlLabel,
  StyledTodosNotesWrapper,
  StyledAccordionDetails
} from './styles/todosStyles'
import TodosOptions from './TodosOptions'
import TodosSettingsNotExpanded from './TodosSettingsNotExpanded'

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
  return (
    <Accordion className={classes.root} onChange={() => setExpanded(!expanded)}>
      <StyledAccordionSummary
        aria-label="Expand"
        aria-controls="additional-actions3-content"
        id="additional-actions3-header"
      >
        <StyledFormControlLabel
          aria-label="Acknowledge"
          onClick={e => e.stopPropagation()}
          control={<Checkbox />}
          label={label}
        />
        {!expanded && (
          <TodosSettingsNotExpanded currentTodo={props.currentTodo} />
        )}
      </StyledAccordionSummary>
      <StyledAccordionDetails>
        <StyledTodosNotesWrapper>
          <Typography color="textSecondary">notes</Typography>
        </StyledTodosNotesWrapper>
        {props.currentTodo && (
          <TodosOptions
            {...props}
            todos
            list={props.list}
            todo={props.currentTodo}
            handleUpdateTodo={handleUpdateTodo}
          />
        )}
      </StyledAccordionDetails>
    </Accordion>
  )
}

export default TodosAccordion
