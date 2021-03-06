import styled from 'styled-components'
import { List, Icon } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

//POPPER MENU

export const styles = theme => ({
  menuItem: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white
      }
    }
  }
})

// EXPAND INPUT
export const useStyledExpandedInput = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    color: 'white',
    background: theme.palette.primary.main,
    padding: '0 4px 0 4px',
    margin: '0 4px 0 4px',
    borderRadius: '3px',
    height: '25px'
  },
  content: {
    fontSize: '17px'
  },
  label: {
    '& .material-icons': { fontSize: '17px' },
    padding: '4px 0 4px 0',
    margin: '0'
  },
  inputWrapper: {
    color: 'white',
    width: '90%',
    '& .MuiInputBase-input': {
      padding: '0',
      margin: '0'
    }
  }
}))

//SETTINGS
export const StyledSettingsList = styled(List)`
  font-size: ${props => (props.todos ? '12px' : '15px')};
  ${props => props.todos && 'padding: 0; min-width: max-content;'}
  .each {
    padding-top: 3px;
    padding-bottom: 3px;
    ${props => props.todos && 'padding: 0;'}
  }
  .tags {
    padding-top: 3px;
    padding-bottom: 0;
  }
  .date {
    padding: ${props => (props.todos ? '1px' : '3px')};
    border-radius: 3px;
    width: fit-content;
    display: flex;
    align-items: center;
    :hover {
      background: ${props => props.theme.palette.primary.main};
      color: white;
    }
    .date-icon-close {
      font-size: 15px;
      font-weight: bold;
    }
  }
  .deadlinePast {
    color: ${props => props.theme.palette.error.main};
  }
  .deadline {
    color: black;
    margin-left: 10px;
    opacity: 0.5;
  }
`

export const StyledIconSettingsList = styled(Icon)`
  margin-right: 5px;
  ${props =>
    props.date === 'Today' && `color: ${props.theme.palette.warning.light};`};
  font-size: ${props => (props.todos ? '15px' : '20px')};
`

// MISC
export const StyledInputWrapperLeft = styled.div`
  text-align: left;
`

//ProjectsList
export const StyledProjectsList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    color: black;
  }
`
