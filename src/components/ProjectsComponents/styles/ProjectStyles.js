import styled from 'styled-components'
import { List } from '@material-ui/core'

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 100%;
`
export const HeaderContainer = styled.div``

//MODAL
export const Body = styled.div`
  width: 130px;
  background: #5b5b5b;
  border: 2px solid black;
  border-radius: 5px;
  padding: 0;
  font-family: monospace;
  li {
    display: flex;
    align-items: center;
    flex-direction: row;
    .label-list-options {
      padding-left: 15px;
    }
    .icon-list-options {
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
      font-size: 1rem;
      padding-left: 5;
    }
  }
`
//CALENDAR
export const StyleWrapper = styled.div`
  .fc {
    padding: 5px;
  }

  .fc-theme-standard {
    & td,
    & th {
      border: none;
    }
    & .fc-scrollgrid {
      border: none;
    }
  }

  .fc-daygrid-day-top {
    display: flex;
    justify-content: center;
    flex-direction: row-reverse;
  }

  .fc-daygrid-day.fc-day-today {
    background: none;
  }

  .fc-daygrid-day-number {
    font-size: 15px;
    font-weight: bold;
  }
  .fc-toolbar.fc-header-toolbar {
    margin: 0;
  }

  & .fc-bg-event {
    background: unset;
    outline: auto;
    margin: 2px;
  }
  .fc-highlight {
    background: #939393;
    border-radius: 3px;
  }
  .test {
    color: #404040;
  }
  .fc-day-future {
    :hover {
      background: #404040;
      border-radius: 3px;
    }
  }
`

export const StyledButtonToday = styled.button`
   {
    width: 30%;
    padding: 3px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 14px;
    font-weight: bold;
    margin-top: 10px;
    margin-left: 5px;
    background: none;
    border: none;
    outline: none;
  }
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
