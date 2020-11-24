import styled from 'styled-components'

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

// TAGS
export const StyledTagWrapper = styled.div`
  display: flex;
  flex-flow: wrap;
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
