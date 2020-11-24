import * as React from 'react'
import Collapse from '@material-ui/core/Collapse'
import Icon from '@material-ui/core/Icon'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import InputBase from '@material-ui/core/InputBase'
import { useStyledExpandedInput } from './styles/componentsStyles'

const ExpandInput = props => {
  const classes = useStyledExpandedInput()
  return (
    <div className={classes.root}>
      <FormControlLabel
        className={classes.label}
        control={
          <Icon
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
export default ExpandInput
