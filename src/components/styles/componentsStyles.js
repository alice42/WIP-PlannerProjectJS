import styled from 'styled-components'
import { List, Icon } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

//POPPER
const PopperBody = styled.div`
  background: #5b5b5b;
  border: 2px solid black;
  border-radius: 5px;
  font-family: monospace;
  padding: 15px 5px 15px 5px;
`

export const PopperBodyList = styled(PopperBody)`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li {
    display: flex;
    align-items: center;
    .label-list-title-options {
      padding-left: 10px;
      font-size: 13px;
    }
    .icon-list-title-options {
      font-size: 20px;
    }
  }
`
export const PopperBodyCalendar = styled(PopperBody)`
  width: min-content;
`

export const PopperBodyListTags = styled(PopperBody)``

//EXPAND INPUT
export const useStyledExpandedInput = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    background: 'gray',
    padding: '0 4px 0 4px',
    margin: '0 4px 0 4px',
    borderRadius: '3px'
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
  ${props => props.todos && 'padding: 0; max-width: 70%;'}
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

export const StyledIconSettingsList = styled(Icon)`
  margin-right: 5px;
  font-size: ${props => (props.todos ? '15px' : '20px')};
`
// MISC
export const StyledInputWrapperLeft = styled.div`
  text-align: left;
`
