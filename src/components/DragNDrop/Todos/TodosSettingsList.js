import * as React from 'react'
import { StyledProjectSettingsList } from '../styles/dndStyles'
import SettingsListItemDate from '../../SettingsListItemDate'

const TodosSettingsList = props => (
  <StyledProjectSettingsList>
    {props.currentTodo && props.currentTodo.when && (
      <SettingsListItemDate
        {...props}
        type={'when'}
        typeSettings={props.currentTodo}
        handleRemoveEvent={props.handleRemoveEvent}
      />
    )}
    {props.currentTodo && props.currentTodo.deadline && (
      <SettingsListItemDate
        {...props}
        type={'deadline'}
        typeSettings={props.currentTodo}
        handleRemoveEvent={props.handleRemoveEvent}
      />
    )}
  </StyledProjectSettingsList>
)

export default TodosSettingsList