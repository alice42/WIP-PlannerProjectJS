import * as React from 'react'
import { StyledContent, StyledSection } from './styles/layoutStyles'
import Sidebar from './SideBar'

const Layout = () => (
  <StyledSection>
    <Sidebar {...props} />
    <StyledContent {...props}>{props.children}</StyledContent>
  </StyledSection>
)

export default Layout
