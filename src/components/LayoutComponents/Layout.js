import * as React from 'react'
import { StyledContent, StyledSection } from './styles/LayoutStyles'
import Sidebar from './SideBar'

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
