import * as React from 'react'
import styled from 'styled-components'
import Sidebar from './SideBar'

const StyledSection = styled.div`
  font-family: monospace;
  font-size: 20px;
  text-align: center;
  height: inherit;
  display: flex;
  flex-wrap: wrap;
`

const StyledContent = styled.div`
  background-color: #575757;
  flex: 3;
  min-height: 90%;
  width: 75%;
  max-width: 75%;
`

class Layout extends React.Component {
  render() {
    return (
      <StyledSection>
        <Sidebar {...this.props} />
        <StyledContent {...this.props}>{this.props.children}</StyledContent>
      </StyledSection>
    )
  }
}

export default Layout
