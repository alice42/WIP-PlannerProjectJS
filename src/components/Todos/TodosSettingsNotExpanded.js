import React from 'react'
import { shortDate } from '../utilsDates'
import { Icon } from '@material-ui/core'
import { StyledTodosSettingsNotExpanded } from './styles/todosStyles'

const TodosSettingsNotExpanded = props => {
  return (
    <StyledTodosSettingsNotExpanded>
      <div>
        {props.currentTodo && props.currentTodo.when && (
          <div
            style={{
              padding: '3px',
              opacity: '0.5',
              background: 'grey',
              borderRadius: '3px'
            }}
          >
            {shortDate(props.currentTodo.when)}
          </div>
        )}
      </div>
      <div style={{ display: 'flex' }}>
        {props.currentTodo && props.currentTodo.deadline && (
          <>
            <Icon style={{ fontSize: '13px', marginRight: '3px' }}>
              schedule
            </Icon>
            {shortDate(props.currentTodo.deadline)}
          </>
        )}
      </div>
    </StyledTodosSettingsNotExpanded>
  )
}

export default TodosSettingsNotExpanded
