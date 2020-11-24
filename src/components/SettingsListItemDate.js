import * as React from 'react'
import { Divider, Icon, ListItem } from '@material-ui/core'
import { dateString, daysFromToday } from './utilsDates'
import { StyledIconSettingsList } from './styles/componentsStyles'

const IconsDate = ({ todos, type }) =>
  type === 'deadline' ? (
    <>
      <StyledIconSettingsList todos={todos && 'true'}>
        schedule
      </StyledIconSettingsList>
      {!todos && 'Deadline: '}
    </>
  ) : (
    <StyledIconSettingsList todos={todos && 'true'}>
      date_range
    </StyledIconSettingsList>
  )

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
          <IconsDate todos={props.todos} type={props.type} />
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
            onMouseLeave={() => sethover(false)}
            onMouseEnter={() => sethover(false)}
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
