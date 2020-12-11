import React from 'react'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import ProjectsList from '../ProjectsList'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { styles } from './styles/layoutStyles'

const drawerWidth = 240
const useStyles = makeStyles(styles)

function ResponsiveDrawer(props) {
  console.log(props)
  const { window } = props
  const classes = useStyles(styles)
  const theme = useTheme()
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <ul>
        <li>
          <a href="A">A</a>
        </li>
        <li>
          <a href="B">B</a>
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
      <Hidden smUp implementation="css">
        <Drawer
          container={container}
          variant="temporary"
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper
          }}
          ModalProps={{
            keepMounted: true
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
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
