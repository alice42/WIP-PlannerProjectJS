import React from 'react'
import Icon from '@material-ui/core/Icon'
import styled from 'styled-components'
const StyledOpenForm = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
`
const TrelloOpenForm = ({ children, onClick }) => {
  return (
    <StyledOpenForm onClick={onClick}>
      <Icon>add</Icon>
      <div style={{ flexShrink: 0 }}>{children}</div>
    </StyledOpenForm>
  )
}

export default TrelloOpenForm
