import styled from 'styled-components'
import { List } from '@material-ui/core'

//POPPER
export const PopperBodyA = styled.div`
  width: 200px;
  background: #5b5b5b;
  border: 2px solid black;
  border-radius: 5px;
  padding: 0;
  font-family: monospace;
  ul {
    margin: 5px;
    list-style: none;
    padding: 0;
  }
  li {
    display: flex;
    align-items: center;
    flex-direction: row;
    padding: 3px;
    .label-list-title-options {
      padding-left: 15px;
      font-size: 14px;
    }
    .icon-list-title-options {
      font-size: 1rem;
      padding-left: 5;
    }
  }
`
export const BodyCalendar = styled.div`
  width: 230px;
  min-height: 290px;
  background: #5b5b5b;
  border: 2px solid black;
  border-radius: 5px;
  padding: 2px;
  font-family: monospace;
  li {
    display: flex;
    align-items: center;
    flex-direction: row;
    .label-list-options {
      padding-left: 15px;
    }
    .icon-list-options {
      padding-left: 5;
    }
  }
`

export const BodyTags = styled.div`
  width: 230px;
  min-height: 290px;
  background: #5b5b5b;
  border: 2px solid black;
  border-radius: 5px;
  padding: 2px;
  font-family: monospace;
  li {
    display: flex;
    align-items: center;
    flex-direction: row;
    .label-list-options {
      padding-left: 15px;
    }
    .icon-list-options {
      padding-left: 5;
    }
  }
`
//
export const StyledInputWrapperLeft = styled.div`
  text-align: left;
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
// export const StyledProjectSettingsList = styled(List)` //PROJECT
//   font-size: 15px;
//   .each {
//     padding-top: 3px;
//     padding-bottom: 3px;
//   }
//   .tags {
//     padding-top: 3px;
//     padding-bottom: 0;
//   }
//   .date {
//     padding: 3px;
//     border-radius: 3px;
//     width: fit-content;
//     display: flex;
//     align-items: center;
//     :hover {
//       opacity: 0.5;
//       background: grey;
//       text-color: white;
//     }
//     .date-icon-close {
//       font-size: 15px;
//       font-weight: bold;
//     }
//   }
//   .deadline {
//     margin-left: 10px;
//     opacity: 0.5;
//   }
// `
