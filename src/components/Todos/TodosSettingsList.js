import * as React from 'react'
import { StyledSettingsList } from '../styles/componentsStyles'
import SettingsListItemDate from '../SettingsListItemDate'

const TodosSettingsList = props => (
  <StyledSettingsList todos={'true'}>
    {props.currentTodo && props.currentTodo.when && (
      <SettingsListItemDate
        {...props}
        todos
        type={'when'}
        typeSettings={props.currentTodo}
        handleRemoveEvent={props.handleRemoveEvent}
      />
    )}
    {props.currentTodo && props.currentTodo.deadline && (
      <SettingsListItemDate
        {...props}
        todos
        type={'deadline'}
        typeSettings={props.currentTodo}
        handleRemoveEvent={props.handleRemoveEvent}
      />
    )}
  </StyledSettingsList>
)

export default TodosSettingsList
