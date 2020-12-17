import * as React from 'react'
import { Divider, Icon, ListItem } from '@material-ui/core'
import { dateString, daysFromToday } from './utilsDates'
import { StyledIconSettingsList } from './styles/componentsStyles'
import { useTheme } from '@material-ui/core/styles'

const IconsDate = ({ todos, type, date, theme }) =>
  type === 'deadline' ? (
    <>
      <StyledIconSettingsList todos={todos && 'true'}>
        schedule
      </StyledIconSettingsList>
      {!todos && 'Deadline: '}
    </>
  ) : (
    <StyledIconSettingsList date={date} theme={theme} todos={todos && 'true'}>
      {date === 'Today' ? 'star' : 'date_range'}
    </StyledIconSettingsList>
  )

const SettingsListItemDate = ({
  type,
  project,
  handleUpdateProject,
  todos
}) => {
  const theme = useTheme()
  const [hover, sethover] = React.useState(false)
  const date = dateString(project[`${type}`], type)
  const deadlinePast =
    type === 'deadline' && daysFromToday(project[`${type}`]).match('ago')
      ? 'deadlinePast'
      : null
  return (
    <>
      <ListItem className={`each ${deadlinePast}`}>
        <span
          className={'date'}
          onMouseLeave={() => sethover(false)}
          onMouseEnter={() => sethover(true)}
        >
          <IconsDate todos={todos} type={type} date={date} theme={theme} />
          {date}
          {hover && (
            <Icon
              className={'date-icon-close'}
              onClick={() => handleUpdateProject(project, null, type)}
            >
              close
            </Icon>
          )}
        </span>
        {!hover && (
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
