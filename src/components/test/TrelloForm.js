import React from 'react'
import Icon from '@material-ui/core/Icon'
import styled from 'styled-components'

// const StyledInput = styled.input`
//   background: none;
//   text-decoration: none;
//   border: none;
//   outline: none;
//   font: inherit;
//   width: 90%;
// `
// const StyledForm = styled.div`
//   display: flex;
//   align-items: start;
//   padding: 10px;
// `

const StyledInput = styled.input`
  background: none;
  text-decoration: none;
  border: none;
  outline: none;
  font: inherit;
  border-bottom: 1px solid black;
  text-align: start;
  padding-left: 10px;
  margin: unset;
  width: -webkit-fill-available;
`
const StyledList = styled.div`
  border-radius: 3px;
  padding: 8px;
  height: 100%;
  margin: 8px;
  ${props =>
    props['data-rbd-drag-handle-draggable-id'] === 'list-0' ||
    'background-color: grey'};
  h4 {
    ${props =>
      props['data-rbd-drag-handle-draggable-id'] === 'list-0' ||
      `
      border-bottom: 1px solid black;
      text-align: start;
      padding-left: 10px;
      margin: 0 0 5px 0;
      `}
  }
`

export default function TrelloForm({
  list,
  text = '',
  onChange,
  closeForm,
  children,
  handleAddItem
}) {
  const placeholder = list ? 'New Heading' : 'New To-do'

  return (
    <StyledList>
      <StyledInput
        placeholder={placeholder}
        autoFocus
        value={text}
        onChange={e => onChange(e)}
        onBlur={handleAddItem}
        onKeyPress={event => {
          if (event.key === 'Enter') {
            handleAddItem()
            closeForm()
          }
        }}
      />
      {children}
      {/* <Icon onMouseDown={closeForm}>close</Icon> */}
    </StyledList>
  )
}
