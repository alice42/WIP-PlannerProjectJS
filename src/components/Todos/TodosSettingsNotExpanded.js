import React from 'react'
import { shortDate } from '../utilsDates'
import { Icon } from '@material-ui/core'
import {
  StyledTodosSettingsNotExpanded,
  StyledWhenInfo,
  StyledDeadlineInfo
} from './styles/todosStyles'

const WhenInfo = ({ when }) => (
  <StyledWhenInfo>{shortDate(when)}</StyledWhenInfo>
)
const DeadlineInfo = ({ deadline }) => (
  <StyledDeadlineInfo>
    <Icon>schedule</Icon>
    {shortDate(deadline)}
  </StyledDeadlineInfo>
)

const TodosSettingsNotExpanded = props => {
  const settingsInfo = props.currentTodo && (
    <StyledTodosSettingsNotExpanded>
      {props.currentTodo.when && <WhenInfo when={props.currentTodo.when} />}
      {props.currentTodo.deadline && (
        <DeadlineInfo deadline={props.currentTodo.deadline} />
      )}
    </StyledTodosSettingsNotExpanded>
  )
  return settingsInfo || null
}

export default TodosSettingsNotExpanded
