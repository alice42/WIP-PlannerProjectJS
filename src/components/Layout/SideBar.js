import React from 'react'

import ProjectsList from '../ProjectsList'
import { styles } from './styles/layoutStyles'
import { Link } from 'react-router-dom'

// const drawerWidth = 240
// const useStyles = makeStyles(styles)

// function ResponsiveDrawer({ handleDrawerToggle, mobileOpen, ...props }) {
//   const { window } = props
//   const classes = useStyles(styles)
//   const theme = useTheme()
//   const drawer = (
//     <div>
//       <div className={classes.toolbar} />
//       <ul>
//         <li>
//           <Link to="/A">A</Link>
//         </li>
//         <li>
//           <Link to="/B">B</Link>
//         </li>
//       </ul>
//       <Divider />
//       <ProjectsList {...props} />
//     </div>
//   )

//   const container =
//     window !== undefined ? () => window().document.body : undefined

//   return (
//     <nav className={classes.drawer} aria-label="mailbox folders">
//       <Hidden smUp implementation="css">
//         <Drawer
//           style={{ zIndex: '1200' }}
//           container={container}
//           variant="temporary"
//           anchor={theme.direction === 'rtl' ? 'right' : 'left'}
//           open={false}
//           onClose={handleDrawerToggle}
//           classes={{
//             paper: classes.drawerPaper
//           }}
//           ModalProps={{
//             keepMounted: true
//           }}
//         >
//           {drawer}
//         </Drawer>
//       </Hidden>
//       <Hidden xsDown implementation="css">
//         <Drawer
//           classes={{
//             paper: classes.drawerPaper
//           }}
//           variant="permanent"
//           open
//         >
//           {drawer}
//         </Drawer>
//       </Hidden>
//     </nav>
//   )
// }

// export default ResponsiveDrawer

import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import MailIcon from '@material-ui/icons/Mail'
import MenuIcon from '@material-ui/icons/Menu'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
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
          <Link to="/A">A</Link>
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
