import React from 'react'
import styled from 'styled-components'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'

const StyledCardContainer = styled.div`
  display: flex;
`

const useStyles = makeStyles({
  root: {
    width: '100%',
    margin: '5px'
  }
})

const MUIAccordionSummary = withStyles({
  root: {
    margin: '0',
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    minHeight: 0,
    '&$expanded': {
      margin: '0',
      minHeight: 0
    }
  },
  content: {
    margin: '0',
    '&$expanded': {
      margin: '0',
      minHeight: 0
    }
  },
  expanded: {
    minHeight: 0
  }
})(AccordionSummary)

const StyledInput = styled.input`
  background: none;
  text-decoration: none;
  border: none;
  outline: none;
  font: inherit;
  text-align: start;
`
const StyledInputList = styled.input`
  background: none;
  text-decoration: none;
  border: none;
  outline: none;
  font: inherit;
  border-bottom: 1px solid black;
  text-align: start;
  padding-left: 10px;
  margin: unset;
  width: -webkit-fill-available;
`

const StyledList = styled.div`
  border-radius: 3px;
  padding: 8px;
  height: 100%;
  margin: 8px;
  ${props =>
    props['data-rbd-drag-handle-draggable-id'] === 'list-0' ||
    'background-color: grey'};
  h4 {
    ${props =>
      props['data-rbd-drag-handle-draggable-id'] === 'list-0' ||
      `
      border-bottom: 1px solid black;
      text-align: start;
      padding-left: 10px;
      margin: 0 0 5px 0;
      `}
  }
`

export default function TrelloForm({
  list,
  text = '',
  onChange,
  closeForm,
  children,
  handleAddItem
}) {
  const placeholder = list ? 'New Heading' : 'New To-do'
  const classes = useStyles()
  return list ? (
    <StyledList>
      <StyledInputList
        placeholder={placeholder}
        autoFocus
        value={text}
        onChange={e => onChange(e)}
        onBlur={handleAddItem}
        onKeyPress={event => {
          if (event.key === 'Enter') {
            handleAddItem()
            closeForm()
          }
        }}
      />
      {children}
    </StyledList>
  ) : (
    <StyledCardContainer>
      <div className={classes.root}>
        <Accordion>
          <MUIAccordionSummary
            aria-label="Expand"
            aria-controls="additional-actions3-content"
            id="additional-actions3-header"
          >
            <FormControlLabel
              aria-label="Acknowledge"
              onClick={event => event.stopPropagation()}
              onFocus={event => event.stopPropagation()}
              control={<Checkbox />}
              label={
                <>
                  <StyledInput
                    placeholder={placeholder}
                    autoFocus
                    value={text}
                    onChange={e => onChange(e)}
                    onBlur={handleAddItem}
                    onKeyPress={event => {
                      if (event.key === 'Enter') {
                        handleAddItem()
                        closeForm()
                      }
                    }}
                  />
                  {children}
                </>
              }
            />
          </MUIAccordionSummary>
        </Accordion>
      </div>
    </StyledCardContainer>
  )
}
