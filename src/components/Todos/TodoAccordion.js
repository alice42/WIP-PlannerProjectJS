import React from 'react'
import Typography from '@material-ui/core/Typography'
import Accordion from '@material-ui/core/Accordion'
import Checkbox from '@material-ui/core/Checkbox'
import {
  useStyledTodoWrapper,
  StyledAccordionSummary,
  StyledFormControlLabel,
  StyledTodosNotesWrapper,
  StyledTodosOptionsWrapper,
  StyledAccordionDetails
} from './styles/todosStyles'
import TodosOptions from '../Options/TodosOptions'
import TodosSettingsList from './TodosSettingsList'
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
      props.currentProject,
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
          control={<Checkbox style={{ pointerEvents: 'auto' }} />}
          label={label}
        />
        {!expanded && (
          <TodosSettingsNotExpanded
            {...props}
            currentTodo={props.currentTodo}
          />
        )}
      </StyledAccordionSummary>
      <StyledAccordionDetails>
        <StyledTodosNotesWrapper>
          <Typography color="textSecondary">notes</Typography>
        </StyledTodosNotesWrapper>
        <StyledTodosOptionsWrapper>
          {/* <TodosOptions
            {...props}
            list={props.list}
            currentTodo={props.currentTodo}
            handleUpdateTodo={handleUpdateTodo}
          />
          <TodosSettingsList
            {...props}
            todos
            currentTodo={props.currentTodo}
            handleUpdateTodo={handleUpdateTodo}
          /> */}
        </StyledTodosOptionsWrapper>
      </StyledAccordionDetails>
    </Accordion>
  )
}

export default TodosAccordion
