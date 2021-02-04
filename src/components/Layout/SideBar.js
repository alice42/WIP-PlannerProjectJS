import React from 'react'
import ProjectsList from '../ProjectsList'
import { styles } from './styles/layoutStyles'
import { Link } from 'react-router-dom'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import { makeStyles, useTheme } from '@material-ui/core/styles'

const drawerWidth = 240
const useStyles = makeStyles(styles)

function ResponsiveDrawer({ handleDrawerToggle, mobileOpen, ...props }) {
  const { window } = props
  const classes = useStyles()
  const theme = useTheme()

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <ul>
        <li>
          <Link to="/FullCalendar">Full Calendar</Link>
        </li>
        <li>
          <Link to="/B">B</Link>
        </li>
      </ul>
      <Divider />
      <ProjectsList {...props} />
    </div>
  )

  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Hidden smUp implementation="css">
        <Drawer
          style={{ zIndex: '1200' }}
          container={container}
          variant="temporary"
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper
          }}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  )
}

export default ResponsiveDrawer
