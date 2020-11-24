import styled from 'styled-components'
import { Checkbox, List } from '@material-ui/core'

export const StyledTitleContainer = styled.div`
  padding: 10px;
  display: block;
  text-align: left;
`

export const StyledTitleCheckbox = styled(Checkbox)`
  padding: 0px 5px 0px 5px;
  vertical-align: text-top;
`

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
export const StyledNotesContainer = styled.div`
  text-align: left;
  padding-left: 20px;
`
