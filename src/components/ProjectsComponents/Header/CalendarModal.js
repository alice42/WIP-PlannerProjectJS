import React from 'react'
import Modal from '@material-ui/core/Modal'
import Calendar from './Calendar'
import styled from 'styled-components'

const StyledModalBody = styled.div`
  position: absolute;
  width: 400px;
  background-color: white;
  border: 2px solid #000;
  box-shadow: grey;
  padding: 16px;
`

export default function CalendarModal(props) {
  const body = (
    <StyledModalBody>
      <h2>Calendar</h2>
      <Calendar
        all={props.all}
        currentProject={props.currentProject}
        handleDateSelect={props.handleDateSelect}
        handleDrop={props.handleDrop}
        handleEventClick={props.handleEventClick}
      />
    </StyledModalBody>
  )

  return (
    <Modal open={props.modal} onClose={props.handleCloseModal}>
      {body}
    </Modal>
  )
}
