import React from 'react'
import Typography from '@material-ui/core/Typography'
import Accordion from '@material-ui/core/Accordion'
import Checkbox from '@material-ui/core/Checkbox'
import {
  useStyles,
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
  const classes = useStyles()

  const label = (
    <div
      style={{ width: 'max-content' }}
      onClick={e => {
        e.preventDefault()
      }}
    >
      {props.label}
    </div>
  )
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
          <TodosOptions
            {...props}
            list={props.list}
            currentTodo={props.currentTodo}
          />
          <TodosSettingsList {...props} todos currentTodo={props.currentTodo} />
        </StyledTodosOptionsWrapper>
      </StyledAccordionDetails>
    </Accordion>
  )
}

export default TodosAccordion