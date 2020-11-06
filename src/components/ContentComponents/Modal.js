import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Calendar from './Calendar'

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}))

export default function SimpleModal(props) {
  const classes = useStyles()

  const body = (
    <div className={classes.paper}>
      <h2 id="simple-modal-title">Text in a modal</h2>
      <Calendar
        all={props.all}
        currentProject={props.currentProject}
        handleDateSelect={props.handleDateSelect}
        handleDrop={props.handleDrop}
        handleEventClick={props.handleEventClick}
      />
    </div>
  )

  return (
    <Modal
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      {body}
    </Modal>
  )
}
