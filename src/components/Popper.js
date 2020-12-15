import React from 'react'
import Popper from '@material-ui/core/Popper'
import Calendar from './Calendar/Calendar'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'
import { Paper } from '@material-ui/core'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Icon from '@material-ui/core/Icon'
import { withStyles } from '@material-ui/core/styles'

const StyledMenuItem = withStyles(theme => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white
      }
    }
  }
}))(MenuItem)

export const OptionsMenu = ({ options, listOptions }) => (
  <Paper elevation={1}>
    <MenuList>
      {options.map((option, index) =>
        listOptions ? (
          <StyledMenuItem key={index} onClick={option.action}>
            <ul style={{ display: 'contents' }}>
              <ListItemIcon style={{ minWidth: 'unset' }}>
                <Icon style={{ width: 'unset' }} fontSize="small">
                  {option.icon}
                </Icon>
              </ListItemIcon>
              {option.title}
            </ul>
          </StyledMenuItem>
        ) : (
          <StyledMenuItem key={index} onClick={option.action}>
            <ListItemIcon>
              <Icon fontSize="small">{option.icon}</Icon>
            </ListItemIcon>
            <ListItemText primary={option.title} />
          </StyledMenuItem>
        )
      )}
    </MenuList>
  </Paper>
)

export const CalendarMenu = props => (
  <Paper
    elevation={1}
    style={{ width: 'min-content', padding: '15px 5px 15px 5px' }}
  >
    <Calendar
      {...props}
      dateType={props.bodyType}
      handleUpdate={props.handleUpdate}
      toUpdate={props.toUpdate}
      handleClose={props.handleClose}
    />
  </Paper>
)

export const PopperBody = props => {
  const type =
    props.bodyType === 'when' || props.bodyType === 'deadline'
      ? 'calendar'
      : props.bodyType
  const bodies = {
    options: <OptionsMenu options={props.options} />,
    calendar: <CalendarMenu {...props} />
  }
  return bodies[type] || null
}

export const PopperContainer = props => {
  return (
    <Popper
      style={{ zIndex: '2' }}
      open={props.open}
      anchorEl={props.anchorEl}
      placement={props.placement}
    >
      {props.body}
    </Popper>
  )
}
