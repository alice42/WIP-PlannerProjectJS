import styled from 'styled-components'

export const StyledTodoContainer = styled.div`
  display: flex;
`

export const StyledInput = styled.input`
  ${props =>
    props.placeholder === 'New To-do'
      ? `
      background: none;
      text-decoration: none;
      border: none;
      outline: none;
      font: inherit;
      text-align: start;
  `
      : `
      background: none;
      text-decoration: none;
      border: none;
      outline: none;
      font: inherit;
      border-bottom: 1px solid black;
      text-align: start;
      padding-left: 10px;
      margin: unset;
      width: -webkit-fill-available
  `}
`

export const StyledHeadingContainer = styled.div`
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
      line-height: 1.5;
      border-bottom: 1px solid black;
      text-align: start;
      padding-left: 10px;
      margin: 0 0 5px 0;
      `}
  }
`
export const StyledOpenForm = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
`
