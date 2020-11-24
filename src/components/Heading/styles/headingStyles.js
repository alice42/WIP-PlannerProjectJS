import styled from 'styled-components'

export const StyledHeadingContainer = styled.div`
  border-radius: 3px;
  padding: 8px;
  height: 100%;
  margin: 8px;
  outline: none;
  ${props =>
    props['data-rbd-draggable-id'] === 'list-0' || 'background-color: grey'};
  h4 {
    ${props =>
      props['data-rbd-draggable-id'] === 'list-0' ||
      `
      display: flex;
      outline: none;
      justify-content: space-between;
      line-height: 1.5;
      border-bottom: 1px solid black;
      text-align: start;
      padding-left: 10px;
      margin: 0 0 5px 0;
      text-align: -webkit-auto;
      text-align-last: left;
      line-break: anywhere;
      overflow-wrap: anywhere;
      `}
  }
`
export const StyledInputWrapperLeft = styled.div`
  text-align: left;
`
