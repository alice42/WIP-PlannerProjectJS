import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'

const useStyles = makeStyles({
  root: {
    width: '100%',
    margin: '5px'
  }
})

const MUIAccordionSummary = withStyles({
  root: {
    margin: '0',
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    minHeight: 0,
    '&$expanded': {
      margin: '0',
      minHeight: 0
    }
  },
  content: {
    margin: '0',
    '&$expanded': {
      margin: '0',
      minHeight: 0
    }
  },
  expanded: {
    minHeight: 0
  }
})(AccordionSummary)

export default function Todos(props) {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Accordion>
        <MUIAccordionSummary
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
        </MUIAccordionSummary>
        <AccordionDetails>
          <Typography color="textSecondary">notes</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
