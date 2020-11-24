import { Divider } from '@material-ui/core'
import * as React from 'react'
import ProjectsList from '../ProjectsList'
import { StyledSidebar } from './styles/layoutStyles'

const SideBar = props => (
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

export default SideBar
