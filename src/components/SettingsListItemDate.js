import * as React from 'react'
import { Divider, Icon, ListItem } from '@material-ui/core'
import { dateString, daysFromToday } from './utilsDates'

import styled from 'styled-components'

const A = styled(Icon)`
  margin-right: 5px;
  font-size: ${props => (props.todos ? '17px' : '20px')};
`
const ListProjectHeader = props => {
  const icon =
    props.type === 'deadline' ? (
      <>
        <A>schedule</A>
        {!props.todos && 'Deadline: '}
      </>
    ) : (
      <A>date_range</A>
    )
  const [hover, sethover] = React.useState(false)
  return (
    <>
      <ListItem className={'each'}>
        <span
          className={'date'}
          onMouseLeave={() => sethover(false)}
          onMouseEnter={() => sethover(true)}
        >
          {icon}
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
        {!props.todos && !hover && (
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
