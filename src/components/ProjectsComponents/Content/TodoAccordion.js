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

  const handleClick = e => {
    console.log(e.currentTraget.value)
  }
  return (
    <Accordion className={classes.root}>
      <StyledAccordionSummary
        aria-label="Expand"
        aria-controls="additional-actions3-content"
        id="additional-actions3-header"
      >
        <FormControlLabel
          aria-label="Acknowledge"
          style={{ pointerEvents: 'none' }}
          onClick={event => event.stopPropagation()}
          control={<Checkbox style={{ pointerEvents: 'auto' }} />}
          label={props.label}
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
          <div style={{ display: 'flex', alignSelf: 'flex-end' }}>
            <Icon fontSize="small">date_range</Icon>
            <Icon fontSize="small" onClick={props.handleDeleteCard}>
              delete
            </Icon>
          </div>
        </div>
      </AccordionDetails>
    </Accordion>
  )
}
