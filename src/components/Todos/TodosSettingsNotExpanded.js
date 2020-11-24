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
  const displayWhen = props.currentTodo && props.currentTodo.when
  const displayDeadline = props.currentTodo && props.currentTodo.deadline
  const display = () => {
    if (displayWhen && !displayDeadline) return 'info-flex-align-start'
    else if (displayDeadline && !displayWhen) return 'info-flex-align-end'
    else if (displayWhen && displayWhen) return 'info-flex-align-spacebetween'
    else return null
  }
  const settingsInfo = display && (
    <StyledTodosSettingsNotExpanded className={`${display()}`}>
      {displayWhen && <WhenInfo when={props.currentTodo.when} />}
      {displayDeadline && (
        <DeadlineInfo deadline={props.currentTodo.deadline} />
      )}
    </StyledTodosSettingsNotExpanded>
  )
  return settingsInfo || null
}

export default TodosSettingsNotExpanded
