import styled from 'styled-components'

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 100%;
`
export const HeaderContainer = styled.div``

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
