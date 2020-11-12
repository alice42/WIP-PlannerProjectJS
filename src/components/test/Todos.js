import React, { useState } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import { Draggable } from 'react-beautiful-dnd'
import Icon from '@material-ui/core/Icon'
import TrelloForm from './TrelloForm'
import TrelloButton from './TrelloButton'
import styled from 'styled-components'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'

const StyledInput = styled.input`
  background: none;
  text-decoration: none;
  border: none;
  outline: none;
  font: inherit;
`
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

const StyledCardContainer = styled.div`
  display: flex;
  justify-content: center;
`

const StyledCard = styled(Card)`
  display: flex;
  width: 90%;
  justify-content: space-between;
  padding: 10px;
`
export default function Todos(props) {
  const [isEditing, setIsEditing] = useState(false)
  const [cardText, setText] = useState(props.text)

  const closeForm = e => {
    setIsEditing(false)
  }

  const handleChange = e => {
    setText(e.target.value)
  }

  const saveCard = e => {
    e.preventDefault()

    props.projectsActions.editCard(
      props.id,
      props.listID,
      cardText,
      props.currentProject
    )
    setIsEditing(false)
  }

  const handleDeleteCard = e => {
    // props.projectsActions.deleteCard(props.id, props.listID)
  }

  const renderEditForm = () => {
    return (
      <StyledInput
        type="text"
        value={cardText}
        onChange={handleChange}
        autoFocus
        // onFocus={handleFocus}
        onBlur={saveCard}
      />
    )
  }
  const classes = useStyles()

  return (
    <Draggable draggableId={String(props.id)} index={props.index}>
      {provided => (
        <StyledCardContainer
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          onDoubleClick={() => setIsEditing(true)}
        >
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
                  label={isEditing ? renderEditForm() : props.text}
                />
              </MUIAccordionSummary>
              <AccordionDetails>
                <Typography color="textSecondary">notes</Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </StyledCardContainer>
      )}
    </Draggable>
  )
}
