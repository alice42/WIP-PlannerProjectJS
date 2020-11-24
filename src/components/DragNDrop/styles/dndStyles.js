import styled from 'styled-components'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import { List } from '@material-ui/core'

export const StyledTodoContainer = styled.div`
  display: flex;
  outline: none;
  margin-bottom: 5px;
  text-align: -webkit-auto;
  text-align-last: left;
  line-break: anywhere;
  overflow-wrap: anywhere;
`

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
export const StyledOpenForm = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
`

export const useStyles = makeStyles({
  root: {
    width: '100%',
    marginLeft: '5px',
    marginRight: '5px',
    outline: 'none'
  }
})

export const StyledAccordionSummary = withStyles({
  root: {
    outline: 'none',
    margin: '0',
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    minHeight: 0,
    '&$expanded': {
      margin: '0',
      minHeight: '0'
    }
  },
  content: {
    outline: 'none',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '0',
    '&$expanded': {
      margin: '0',
      minHeight: '0'
    }
  },
  expanded: {
    minHeight: '0'
  }
})(AccordionSummary)

export const StyledProjectSettingsList = styled(List)`
  font-size: 15px;
  .each {
    padding-top: 3px;
    padding-bottom: 3px;
  }
  .tags {
    padding-top: 3px;
    padding-bottom: 0;
  }
  .date {
    padding: 3px;
    border-radius: 3px;
    width: fit-content;
    display: flex;
    align-items: center;
    :hover {
      opacity: 0.5;
      background: grey;
      text-color: white;
    }
    .date-icon-close {
      font-size: 15px;
      font-weight: bold;
    }
  }
  .deadline {
    margin-left: 10px;
    opacity: 0.5;
  }
`
export const StyledInputWrapperLeft = styled.div`
  text-align: left;
`