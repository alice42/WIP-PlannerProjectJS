import React from 'react'
import Typography from '@material-ui/core/Typography'
import Accordion from '@material-ui/core/Accordion'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { useStyles, StyledAccordionSummary } from './styles/ContentStyles'
import { Icon } from '@material-ui/core'

export default function Todos(props) {
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
          onClick={event => event.stopPropagation()}
          onFocus={event => event.stopPropagation()}
          control={<Checkbox />}
          label={props.label}
        />
        <div>
          <Icon>date_range</Icon>
          <Icon onClick={props.handleDeleteCard}>delete</Icon>
        </div>
      </StyledAccordionSummary>
      <AccordionDetails>
        <Typography color="textSecondary">notes</Typography>
      </AccordionDetails>
    </Accordion>
  )
}
