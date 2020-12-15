import { Card } from '@material-ui/core'
import styled from 'styled-components'

// HEADING & TODOS CONTAINERS
export const StyledHeadingContainer = styled(Card)`
  ${props =>
    props['data-rbd-draggable-id'] === 'list-0'
      ? ` 
  border-radius: 3px;
  padding: 8px;
  height: 100%;
  margin: 8px;
  outline: none;
  box-shadow: none;`
      : `border-radius: 3px;
  padding: 8px;
  height: 100%;
  margin: 8px;
  outline: none;`}
  ${props =>
    props['data-rbd-draggable-id'] === 'list-0' &&
    'background-color: unset; color: black;'}
  h4 {
    ${props =>
      props['data-rbd-draggable-id'] === 'list-0' ||
      `
      display: flex;
      outline: none;
      justify-content: space-between;
      line-height: 1.5;
      border-bottom: 1px solid ;
      text-align: start;
      padding-left: 10px;
      margin: 0 0 15px 0;
      text-align: -webkit-auto;
      text-align-last: left;
      line-break: anywhere;
      overflow-wrap: anywhere;
      `}
  }
`
export const styles = theme => ({
  cardHeading: {
    background: theme.palette.primary.main,
    color: 'white',
    borderColor: 'white'
  }
})
