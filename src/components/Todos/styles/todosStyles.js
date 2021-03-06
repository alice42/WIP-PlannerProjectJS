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
  min-width: fit-content;
`
export const StyledDeadlineInfo = styled.div`
  display: flex;
  min-width: fit-content;
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
    // display: 'block',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '0',
    '&$expanded': {
      display: 'flex',
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
`
export const StyledAccordionDetails = styled(AccordionDetails)`
  display: flex;
  flex-direction: column;
  width: -webkit-fill-available;
`

export const styles = theme => ({
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    flexFlow: 'row wrap'
  },

  options: {
    display: 'flex',
    alignItems: 'flex-end',
    paddingTop: '5px'
  }
})

export const StyledCheckpoint = makeStyles(theme => ({
  root: {
    marginTop: '2px',
    marginBottom: '2px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    '&:focus': {
      outlineColor: theme.palette.primary.main
    }
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    fontSize: '13px',
    '& .MuiInputBase-input': {
      padding: 0,
      '&focus': {
        background: 'red'
      }
    }
  },
  iconButton: {
    '& .MuiCheckbox-root': {
      '& .MuiSvgIcon-root': {
        fontSize: '17px',
        margin: '3px'
      },
      padding: 0
    },
    '& .MuiSvgIcon-root': {
      fontSize: '17px',
      margin: '3px'
    },
    padding: 0
  },
  divider: {
    height: 28,
    margin: 4
  }
}))
