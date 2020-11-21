import styled from 'styled-components'
import { List } from '@material-ui/core'

export const TitleContainer = styled.div`
  padding: 10px;
`
export const StyledInputContainer = styled.span`
  display: block;
  width: 100%;
  text-align: left;
`

export const StyledModalBody = styled.div`
  position: absolute;
  width: 400px;
  background-color: white;
  border: 2px solid #000;
  box-shadow: grey;
  padding: 16px;
`
//HEADER LIST
export const StyledContainerList = styled(List)`
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
`
//TAGS
export const StyledTagWrapper = styled.div`
  display: flex;
  flexflow: wrap;
`
export const StyledTagButton = styled.div`
  font-size: 15px;
  margin-left: 3px;
  margin-bottom: 3px;
  padding: 3px;
  border-radius: 3px;
  width: fit-content;
  display: flex;
  align-items: center;
  opacity: 0.5;
  background: grey;
  text-color: white;
  overflow-wrap: anywhere;
  : focus {
    outline: none;
    background: lightsteelblue;
  }
`
export const StyledTagButtonInput = styled.input`
  margin-left: 3px;
  margin-bottom: 3px;
  padding: 3px;
  background: none;
  text-decoration: none;
  border: none;
  outline: none;
  font: inherit;
  text-align: -webkit-auto;
  text-align-last: left;
  line-break: anywhere;
  overflow-wrap: anywhere;
`
