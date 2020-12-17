import * as React from 'react'
import { useTheme } from '@material-ui/core'
import { StyledSettingsList } from '../styles/componentsStyles'
import SettingsListItemDate from '../SettingsListItemDate'

const TodosSettingsList = props => {
  const theme = useTheme()
  return (
    <StyledSettingsList todos={'true'} theme={theme}>
      {props.currentTodo && props.currentTodo.when && (
        <SettingsListItemDate
          todos
          type={'when'}
          project={props.currentTodo}
          handleUpdateProject={props.handleUpdateTodo}
        />
      )}
      {props.currentTodo && props.currentTodo.deadline && (
        <SettingsListItemDate
          todos
          type={'deadline'}
          project={props.currentTodo}
          handleUpdateProject={props.handleUpdateTodo}
        />
      )}
    </StyledSettingsList>
  )
}

export default TodosSettingsList
