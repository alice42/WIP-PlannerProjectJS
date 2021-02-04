import * as React from 'react'
import { styles } from './styles/layoutStyles'
import { makeStyles } from '@material-ui/core/styles'
import Header from './Header'
import Sidebar from './SideBar'

import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'

function useWidth() {
  const theme = useTheme()
  const keys = [...theme.breakpoints.keys].reverse()
  return (
    keys.reduce((output, key) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const matches = useMediaQuery(theme.breakpoints.up(key))
      return !output && matches ? key : output
    }, null) || 'xs'
  )
}

const useStyles = makeStyles(styles)

const Layout = props => {
  const classes = useStyles()
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const width = useWidth()

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  if (width !== 'xs' && mobileOpen) setMobileOpen(false)

  return (
    <div className={classes.root}>
      <Header handleDrawerToggle={handleDrawerToggle} />
      <Sidebar
        {...props}
        handleDrawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen}
      />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
      </main>
    </div>
  )
}

export default Layout
