import styled from 'styled-components'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import { FormControlLabel } from '@material-ui/core'

export const StyledTodoContainer = styled.div`
  display: flex;
  outline: none;
  margin-bottom: 5px;
  text-align: -webkit-auto;
  text-align-last: left;
  line-break: anywhere;
  overflow-wrap: anywhere;
`

export const StyledWhenInfo = styled.div`
  padding: 3px;
  color: white;
  background: ${props => props.theme.palette.primary.main};
  border-radius: 3px;
`
export const StyledDeadlineInfo = styled.div`
  display: flex;
  ${props => props.isPast && `color: ${props.theme.palette.error.main}`};
  span {
    font-size: 13px;
    margin-right: 3px;
  }
`

export const useStyledTodoWrapper = makeStyles({
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
  },
  label: {
    width: 'max-content'
  }
})(FormControlLabel)

export const StyledTodosSettingsNotExpanded = styled.div`
  width: -webkit-fill-available;
  display: flex;
  font-size: 10px;
  align-items: center;
  &.info-flex-align-start {
    justify-content: flex-start;
  }
  &.info-flex-align-end {
    justify-content: flex-end;
  }
  &.info-flex-align-spacebetween {
    justify-content: space-between;
  }
`
export const StyledTodosNotesWrapper = styled.div`
  display: flex;
  min-height: 50px;
`
export const StyledAccordionDetails = styled(AccordionDetails)`
  display: flex;
  flex-direction: column;
  width: -webkit-fill-available;
`

export const styles = theme => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column-reverse',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'row-reverse',
      alignItems: 'flex-end'
    }
  },
  options: {
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      width: '50%',
      justifyContent: 'flex-end'
    }
  },
  settings: {
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      width: '50%',
      justifyContent: 'flex-start'
    }
  }
})
