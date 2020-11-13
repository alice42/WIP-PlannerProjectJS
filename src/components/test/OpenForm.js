import React from 'react'
import Icon from '@material-ui/core/Icon'
import { StyledOpenForm } from './styles/DndStyled'

const OpenForm = ({ children, onClick }) => {
  return (
    <StyledOpenForm onClick={onClick}>
      <Icon>add</Icon>
      <div style={{ flexShrink: 0 }}>{children}</div>
    </StyledOpenForm>
  )
}

export default OpenForm
