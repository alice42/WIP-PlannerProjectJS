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

const SettingsListItemDate = ({
  type,
  project,
  handleUpdateProject,
  todos
}) => {
  const [hover, sethover] = React.useState(false)
  return (
    <>
      <ListItem className={'each'}>
        <span
          className={'date'}
          onMouseLeave={() => sethover(false)}
          onMouseEnter={() => sethover(true)}
        >
          <IconsDate todos={todos} type={type} />
          {dateString(project[`${type}`], type)}
          {hover && (
            <Icon
              className={'date-icon-close'}
              onClick={() => handleUpdateProject(project, null, type)}
            >
              close
            </Icon>
          )}
        </span>
        {!todos && !hover && (
          <span
            className={'deadline'}
            onMouseLeave={() => sethover(false)}
            onMouseEnter={() => sethover(false)}
          >
            {type === 'deadline' && daysFromToday(project[`${type}`])}
          </span>
        )}
      </ListItem>
      <Divider />
    </>
  )
}

export default SettingsListItemDate
