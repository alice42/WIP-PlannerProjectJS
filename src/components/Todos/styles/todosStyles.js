import styled from 'styled-components'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import { FormControlLabel, List } from '@material-ui/core'

export const StyledWhenInfo = styled.div`
  padding: 3px;
  opacity: 0.5;
  background: grey;
  border-radius: 3px;
`
export const StyledDeadlineInfo = styled.div`
  display: flex;
  span {
    font-size: 13px;
    margin-right: 3px;
  }
`

export const StyledTodoContainer = styled.div`
  display: flex;
  outline: none;
  margin-bottom: 5px;
  text-align: -webkit-auto;
  text-align-last: left;
  line-break: anywhere;
  overflow-wrap: anywhere;
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

export const StyledFormControlLabel = withStyles({
  root: {
    marginRight: '5px'
  }
})(FormControlLabel)

export const StyledProjectSettingsList = styled(List)`
  font-size: 12px;
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

export const StyledTodosSettingsNotExpanded = styled.div`
  width: -webkit-fill-available;
  display: flex;
  font-size: 10px;
  justify-content: space-between;
  align-items: center;
`
export const StyledInputWrapperLeft = styled.div`
  text-align: left;
`
export const StyledTodosNotesWrapper = styled.div`
  display: flex;
  min-height: 50px;
`
export const StyledTodosOptionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
  align-items: flex-end;
`
export const StyledAccordionDetails = styled(AccordionDetails)`
  display: flex;
  flex-direction: column;
  width: -webkit-fill-available;
`
