import React from 'react'
import Typography from '@material-ui/core/Typography'
import Accordion from '@material-ui/core/Accordion'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { useStyles, StyledAccordionSummary } from '../styles/dndStyles'
import TodosOptions from '../../Options/TodosOptions'
import TodosSettingsList from './TodosSettingsList'

const TodosAccordion = props => {
  const classes = useStyles()
  return (
    <Accordion className={classes.root}>
      <StyledAccordionSummary
        aria-label="Expand"
        aria-controls="additional-actions3-content"
        id="additional-actions3-header"
      >
        <FormControlLabel
          aria-label="Acknowledge"
          onClick={e => e.stopPropagation()}
          control={<Checkbox style={{ pointerEvents: 'auto' }} />}
          label={
            <div
              onClick={e => {
                e.preventDefault()
              }}
            >
              {props.label}
            </div>
          }
        />
      </StyledAccordionSummary>
      <AccordionDetails>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '-webkit-fill-available'
          }}
        >
          <div style={{ display: 'flex', minHeight: '50px' }}>
            <Typography color="textSecondary">notes</Typography>
          </div>
          <TodosOptions
            {...props}
            list={props.list}
            currentTodo={props.currentTodo}
          />
          <TodosSettingsList {...props} currentTodo={props.currentTodo} />
        </div>
      </AccordionDetails>
    </Accordion>
  )
}

export default TodosAccordion
