import { Divider, Icon, ListItem } from '@material-ui/core'
import * as React from 'react'
import { dateString, daysFromToday } from './utilsDates'

const ListProjectHeader = props => {
  const [hover, sethover] = React.useState(false)
  return (
    <>
      <ListItem className={'each'}>
        <span
          className={'date'}
          onMouseLeave={() => sethover(false)}
          onMouseEnter={() => sethover(true)}
        >
          {props.type === 'deadline' && 'DEADLINE: '}
          {dateString(props.typeSettings[`${props.type}`], props.type)}
          {hover && (
            <Icon
              className={'date-icon-close'}
              onClick={() => props.handleRemoveEvent(props.type)}
            >
              close
            </Icon>
          )}
        </span>
        {!hover && (
          <span
            className={'deadline'}
            onMouseLeave={e => sethover(false)}
            onMouseEnter={e => sethover(false)}
          >
            {props.type === 'deadline' &&
              daysFromToday(props.typeSettings[`${props.type}`])}
          </span>
        )}
      </ListItem>
      <Divider />
    </>
  )
}

export default ListProjectHeader
