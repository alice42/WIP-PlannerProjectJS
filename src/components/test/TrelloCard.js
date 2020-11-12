import React, { useState } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import { Draggable } from 'react-beautiful-dnd'
import Icon from '@material-ui/core/Icon'
import TrelloForm from './TrelloForm'
import TrelloButton from './TrelloButton'
import styled from 'styled-components'
import Accordion from './Accordion'

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
export default function TrelloCard(props) {
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

    props.projectsActions.editCard(props.id, props.listID, cardText)
    setIsEditing(false)
  }

  const handleDeleteCard = e => {
    props.projectsActions.deleteCard(props.id, props.listID)
  }

  const renderEditForm = () => {
    return (
      <TrelloForm text={cardText} onChange={handleChange} closeForm={closeForm}>
        <TrelloButton onClick={saveCard}>Save</TrelloButton>
      </TrelloForm>
    )
  }

  const renderCard = () => {
    return (
      <Draggable draggableId={String(props.id)} index={props.index}>
        {provided => (
          <StyledCardContainer
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            onDoubleClick={() => setIsEditing(true)}
          >
            {/* <StyledCard> */}
            <Accordion text={props.text} />
            {/* <div>
                <Typography>{props.text}</Typography>
              </div>
              <div>
                <Icon onMouseDown={() => setIsEditing(true)} fontSize="small">
                  edit
                </Icon>
                <Icon fontSize="small" onMouseDown={handleDeleteCard}>
                  delete
                </Icon>
              </div>
            // </StyledCard> */}
          </StyledCardContainer>
        )}
      </Draggable>
    )
  }

  return isEditing ? renderEditForm() : renderCard()
}
