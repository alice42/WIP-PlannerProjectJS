import { Divider, Icon, ListItem } from '@material-ui/core'
import * as React from 'react'
import { date } from '../../utils'

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
          {date(props.currentProject[`${props.type}`])}
          {hover && (
            <Icon
              className={'date-icon-close'}
              onClick={props.handleRemoveEvent}
            >
              close
            </Icon>
          )}
        </span>
      </ListItem>
      <Divider />
    </>
  )
}

export default ListProjectHeader
