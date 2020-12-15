import * as React from 'react'
import { Divider, ListItem, useTheme } from '@material-ui/core'
import { StyledSettingsList } from '../styles/componentsStyles'
import SettingsListItemDate from '../SettingsListItemDate'
import Tags from '../Tags/Tags'

const TodosSettingsList = props => {
  const theme = useTheme()
  return (
    <StyledSettingsList todos={'true'} theme={theme}>
      {props.currentTodo && props.currentTodo.when && (
        <SettingsListItemDate
          {...props}
          todos
          type={'when'}
          project={props.currentTodo}
          handleUpdateProject={props.handleUpdateTodo}
        />
      )}
      {props.currentTodo && props.currentTodo.deadline && (
        <SettingsListItemDate
          {...props}
          todos
          type={'deadline'}
          project={props.currentTodo}
          handleUpdateProject={props.handleUpdateTodo}
        />
      )}
      {props.currentTodo && props.currentTodo.tags && (
        <ListItem className={'each tags'}>
          <Tags
            {...props}
            open={true}
            project={props.currentTodo}
            handleUpdate={props.handleUpdateTodo}
          />
        </ListItem>
      )}
    </StyledSettingsList>
  )
}

export default TodosSettingsList
