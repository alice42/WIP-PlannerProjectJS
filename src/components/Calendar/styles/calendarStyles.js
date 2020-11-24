import styled from 'styled-components'

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
  .monthRender {
    font-size: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: inherit;
    font-weight: bold;
  }
  .past {
    opacity: 0.4;
  }
  .fc-day-disabled {
    background: unset;
  }
  .fc-next-button.fc-button-primary,
  .fc-prev-button.fc-button-primary,
  .fc-button-primary {
    background: unset;
    border: unset;
    :disabled,
    :hover,
    :active,
    :focus,
    :not(:disabled):active,
    :not(:disabled):active:focus {
      background: unset;
      border: unset;
      outline: none;
      box-shadow: unset;
    }
    :disabled {
      opacity: 0.2;
    }
  }
  .fc-today-button.fc-button-primary {
    width: 130px;
    display: flex;
    border: unset;
    margin: 0;
    padding: 0;
    background: rgba(0, 0, 0, 0.3);
    justify-content: center;
    :disabled {
      display: none;
    }
  }
  .fc-footer-toolbar {
    display: flex;
    align-items: baseline;
  }
  .fc-toolbar-title {
    font-size: 15px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
  }
  .fc--button {
    padding: 0;
  }
`

export const StyledButtonToday = styled.button`
   {
    width: 35%;
    padding: 3px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 17px;
    font-weight: bold;
    margin-top: 10px;
    margin-left: 5px;
    background: none;
    border: none;
    outline: none;
    font-family: inherit;
  }
`
