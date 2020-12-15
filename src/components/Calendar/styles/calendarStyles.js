import { Button } from '@material-ui/core'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'

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

  .fc th,
  .fc td {
    vertical-align: inherit;
    padding: 0;
  }

  .fc .fc-col-header-cell-cushion {
    display: contents;
  }

  .fc-daygrid-day-top {
    display: flex;
    justify-content: center;
    flex-direction: row-reverse;
  }
  fc-day {
    pointerevents: auto;
  }
  .today-icon {
    background: none;
    color: ${props => props.theme.palette.primary.main};
  }

  .fc-daygrid-day.fc-day-today {
    background: none;
  }

  .fc-toolbar.fc-header-toolbar {
    margin: 0;
  }

  & .fc-bg-event {
    background: ${props => props.theme.palette.primary.main};
    outline: auto ${props => props.theme.palette.primary.main};
    margin: 2px;
  }
  .fc-highlight {
    background: ${props => props.theme.palette.primary.main};
    border-radius: 3px;
  }
  .fc-day-future {
    :hover {
      background: ${props => props.theme.palette.primary.main};
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
  .fc-day-past {
    :hover {
      background: ${props => props.theme.palette.primary.main};
      border-radius: 3px;
    }
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
    background: ${props => props.theme.palette.primary.main};
    border: unset;
    :disabled,
    :hover,
    :active,
    :focus,
    :not(:disabled):active,
    :not(:disabled):active:focus {
      background: ${props => props.theme.palette.primary.main};
      border: unset;
      outline: none;
      box-shadow: unset;
    }
    :disabled {
      opacity: 0.2;
    }
  }
  .fc-today-button.fc-button-primary {
    width: 100%;
    display: flex;
    border: unset;
    margin: 0;
    padding: 0;
    background: ${props => props.theme.palette.primary.main};
    justify-content: center;
    :disabled {
      display: none;
    }
  }
  .fc-footer-toolbar {
    min-width: 220px;
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

export const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  }
}))
