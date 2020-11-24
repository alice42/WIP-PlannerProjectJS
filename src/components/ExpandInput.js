import * as React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Collapse from '@material-ui/core/Collapse'
import Icon from '@material-ui/core/Icon'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import InputBase from '@material-ui/core/InputBase'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    background: 'gray',
    padding: '0 4px 0 4px',
    margin: '0 4px 0 4px',
    borderRadius: '3px'
  },
  content: {
    fontSize: '17px'
  },
  label: {
    padding: '4px 0 4px 0',
    margin: '0'
  },
  inputWrapper: {
    width: '90%',
    '& .MuiInputBase-input': {
      padding: '0',
      margin: '0'
    }
  }
}))

export default function ExpandInput(props) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <FormControlLabel
        className={classes.label}
        control={
          <Icon
            style={{ fontSize: '17px' }}
            id={props.id}
            onClick={e => props.handleClick(e.currentTarget.id, 'bottom', e)}
          >
            {props.icon}
          </Icon>
        }
      />
      <Collapse
        orientation="horizontal"
        in={props.expanded[props.id]}
        timeout="auto"
        unmountOnExit
      >
        <InputBase
          type="text"
          className={classes.inputWrapper}
          placeholder={props.option}
        />
      </Collapse>
    </div>
  )
}
