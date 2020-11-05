import { Divider } from '@material-ui/core'
import * as React from 'react'
import styled from 'styled-components'

import ProjectsList from '../SideBarComponents/ProjectsList'

const StyledSidebar = styled.div`
  background-color: #a2a2a2;
  flex: 1;
  min-height: 90%;
`

const SideBar = props => {
  return (
    <StyledSidebar>
      <nav className="menu">
        <ul>
          <li>
            <a href="A">A</a>
          </li>
          <li>
            <a href="B">B</a>
          </li>
        </ul>
        <Divider variant="middle" />
        <ProjectsList {...props} />
      </nav>
    </StyledSidebar>
  )
}
export default SideBar
