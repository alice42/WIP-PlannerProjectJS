import styled from 'styled-components'

export const StyledTagWrapper = styled.div`
  display: flex;
  flex-flow: wrap;
`
export const StyledTagButton = styled.div`
  font-size: ${props => (props.withButton ? '13px' : '11px')};
  margin-left: 3px;
  margin-bottom: 3px;
  padding: 3px;
  border-radius: 3px;
  width: fit-content;
  display: flex;
  align-items: center;
  background: ${props => props.theme.palette.primary.main};
  color: white;
  overflow-wrap: anywhere;
  : hover {
    outline: none;
    background: ${props => props.theme.palette.primary.light};
  }
  : focus {
    outline: none;
    background: ${props => props.theme.palette.primary.light};
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
