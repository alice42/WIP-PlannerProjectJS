import { Divider, Icon, ListItem } from '@material-ui/core'
import * as React from 'react'
import { dateString, daysFromToday } from '../../utils'

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
          {props.type === 'deadLine' && 'DEADLINE: '}
          {dateString(props.currentProject[`${props.type}`], props.type)}
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
            {props.type === 'deadLine' &&
              daysFromToday(props.currentProject[`${props.type}`])}
          </span>
        )}
      </ListItem>
      <Divider />
    </>
  )
}

export default ListProjectHeader
